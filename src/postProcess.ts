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
    const articleInGitHubUrl = genTILData().PathToArticleList;
    const tags = genTILData().tags;
    console.log('articleInGitHub: ', articleInGitHub);
    console.log('articleInGitHubPath: ', articleInGitHubUrl);
    console.log('tags: ', tags);

    // gen all article props
    const tilList = [];
    for (let idx = 0; idx < articleInGitHub.length; idx++) {
      tilList.push({
        title: articleInGitHub[idx],
        url: articleInGitHubUrl[idx],
        tag: tags[idx],
      });
    }

    // get the interaction set to only update the article
    // that exists in TIL but not exist in Notion
    let gitHubArticleSet = new Set(articleInGitHub);
    let ArticleInNotionSet = new Set(ArticleInNotion);
    let articleToUpdateToNotion = [
      ...new Set(
        [...gitHubArticleSet].filter((x) => !ArticleInNotionSet.has(x))
      ),
    ];

    console.log('articleToUpdateToNotion:', articleToUpdateToNotion);

    // also get the url and tag for the intersection set to update
    const articleInGitHubUrlToNotion = [];
    const tagsToNotion = [];
    for (const article of articleToUpdateToNotion) {
      articleInGitHubUrlToNotion.push(
        tilList.filter((i) => i.title === article)[0].url
      );
      tagsToNotion.push(tilList.filter((i) => i.title === article)[0].tag);
    }

    // get property
    const { properties } = await notion.databases.retrieve({
      database_id: database_id,
    });

    // Update TIL  article to notion_db
    const notionProps = updateArticleFromGithubTIL(
      articleToUpdateToNotion,
      articleInGitHubUrlToNotion,
      tagsToNotion,
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
