import * as fs from 'fs';
import * as path from 'path';
import { Til } from './type';

export function genTIL(): string {
  const tilFolderPath = './til';
  const folders: string[] = fs.readdirSync(tilFolderPath);

  let tilSummary: Til = {};
  for (const folder of folders) {
    const titles: string[] = [];
    const folderPath = `./til/${folder}/`;
    fs.readdirSync(folderPath).map((fileName: string) => {
      titles.push(getFileNameWithoutExt(fileName));
    });
    tilSummary[folder] = titles;
  }

  let text: string = '';

  for (const [key, values] of Object.entries(tilSummary)) {
    text += `\n\n ## ${key}\n`;

    for (const title of values) {
      text += `- [${title}](https://github.com/re4388/til/blob/master/${whiteSpaceAdder(
        key
      )}/${whiteSpaceAdder(title)}.md)\n`;
    }
  }

  return text;
}

// utils

function whiteSpaceAdder(text: string) {
  return text.replace(/ /g, '%20');
}

function getFileNameWithoutExt(fileName: string) {
  return path.basename(fileName, path.extname(fileName));
}
