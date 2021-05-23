import * as fs from 'fs';
import { Til } from './type';
import { getFileNameWithoutExt, whiteSpaceAdder } from './utils';

const pathToTil = 'https://github.com/re4388/re4388/blob/master/til';

export function genTIL(tilFolderPath: string) {
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

  let text: string = '';
  const titleList = [];
  const PathToArticleList = [];
  for (const [key, values] of Object.entries(tilSummary)) {
    text += `\n\n ## ${key}\n`;

    for (const title of values) {
      const pathToMd = `${pathToTil}/${whiteSpaceAdder(key)}/${whiteSpaceAdder(
        title
      )}.md`;

      // push to article list
      titleList.push(title);
      // push to article path list
      PathToArticleList.push(pathToMd);
      // construct md format
      text += `- [${title}](${pathToMd})\n`;
    }
  }

  return { text, titleList, PathToArticleList };
}
