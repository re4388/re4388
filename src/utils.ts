import * as path from 'path';

export function whiteSpaceAdder(text: string) {
  return text.replace(/ /g, '%20');
}

export function getFileNameWithoutExt(fileName: string) {
  return path.basename(fileName, path.extname(fileName));
}
