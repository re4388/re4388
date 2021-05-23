import * as fs from 'fs';
import { Til } from './type';
import { getFileNameWithoutExt, whiteSpaceAdder } from './utils';

const pathToTil = 'https://github.com/re4388/re4388/blob/master/til';

export function genTILData(tilFolderPath: string = './til') {
  const folders: string[] = fs.readdirSync(tilFolderPath);

  let tilSummary: Til = {};
  for (const folder of folders) {
    const titles: string[] = [];
    const folderPath = `${tilFolderPath}/${folder}/`;
    fs.readdirSync(folderPath).map((fileName: string) => {
      titles.push(getFileNameWithoutExt(fileName));
    });
    tilSummary[folder] = titles;
  }

  let allTitleAndUrlInMd: string = '';
  const articleTitleList = [];
  const PathToArticleList = [];
  for (const [key, values] of Object.entries(tilSummary)) {
    allTitleAndUrlInMd += `\n\n ## ${key}\n`;

    for (const title of values) {
      const pathToMd = `${pathToTil}/${whiteSpaceAdder(key)}/${whiteSpaceAdder(
        title
      )}.md`;

      // push to article list
      articleTitleList.push(title);
      // push to article path list
      PathToArticleList.push(pathToMd);
      // construct md format
      allTitleAndUrlInMd += `- [${title}](${pathToMd})\n`;
    }
  }

  return { allTitleAndUrlInMd, articleTitleList, PathToArticleList };
}
