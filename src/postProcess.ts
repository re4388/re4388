const { Client } = require('@notionhq/client');

require('dotenv').config();
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const database_id = '2e9b31c52cba498f8544649a804cce95';
const notion = new Client({
  auth: NOTION_TOKEN,
});

export async function runNotionApiGet() {
  const myPage = await notion.databases.query({
    database_id: database_id,
    filter: {
      property: 'Name',
      text: {
        contains: 'react',
      },
    },
  });
  console.log('TIL', JSON.stringify(myPage));
}
