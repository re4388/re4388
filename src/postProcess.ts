import { genTILData } from './genTIL';

const { Client } = require('@notionhq/client');
require('dotenv').config();

type Article = {
  properties: { Name: { title: { text: { content: any } }[] } };
};

(async function runNotionApiGet() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  try {
    const data = await notion.databases.query({
      database_id: '2e9b31c52cba498f8544649a804cce95',
    });

    const ArticleInNotion = data.results.map(
      (article: Article) => article.properties.Name.title[0].text.content
    );
    console.log('ArticleInNotion: ', ArticleInNotion);
    const articleInGitHub = genTILData().articleTitleList;
    console.log('articleInGitHub: ', articleInGitHub);

    let gitHubArticleSet = new Set(articleInGitHub);
    let ArticleInNotionSet = new Set(ArticleInNotion);
    let articleToUpdateToNotion = new Set(
      [...gitHubArticleSet].filter((x) => !ArticleInNotionSet.has(x))
    );

    console.log('articleToUpdateToNotion:', articleToUpdateToNotion);
  } catch (error) {
    console.log(error);
  }
})();
