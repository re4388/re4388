import { genTILData } from './genTIL';
import { Article } from './type';
import { updateArticleFromGithubTIL } from './updateNotionFromTIL';

const { Client } = require('@notionhq/client');
require('dotenv').config();

const database_id = '2e9b31c52cba498f8544649a804cce95';

(async function runNotionApiGet() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  try {
    const data = await notion.databases.query({
      database_id,
    });

    // get current article in notion
    const ArticleInNotion = data.results.map(
      (article: Article) => article.properties.Name.title[0].text.content
    );
    console.log('ArticleInNotion: ', ArticleInNotion);

    // get current article in this repo, TIL
    const articleInGitHub = genTILData().articleTitleList;
    const articleInGitHubPath = genTILData().PathToArticleList;
    const tags = genTILData().tags;
    console.log('articleInGitHub: ', articleInGitHub);
    console.log('articleInGitHubPath: ', articleInGitHubPath);
    console.log('tags: ', tags);

    // get the interaction set to only update the article
    // that exists in TIL but not exist in Notion
    let gitHubArticleSet = new Set(articleInGitHub);
    let ArticleInNotionSet = new Set(ArticleInNotion);
    let articleToUpdateToNotion = new Set(
      [...gitHubArticleSet].filter((x) => !ArticleInNotionSet.has(x))
    );

    console.log('articleToUpdateToNotion:', articleToUpdateToNotion);

    const { properties } = await notion.databases.retrieve({
      database_id: database_id,
    });

    // Update TIL  article to notion_db
    const notionProps = updateArticleFromGithubTIL(
      Array.from(articleToUpdateToNotion),
      articleInGitHubPath,
      tags,
      properties
    );

    for (const prop of await notionProps) {
      console.log('notion prop :', prop);
      await notion.pages.create({
        parent: {
          database_id,
        },
        properties: prop,
      });
    }
  } catch (error) {
    console.log(error);
  }
})();
