const md = require('markdown-it')({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Autoconvert URL-like text to links
});

type Til = { [folder: string]: string[] };

import * as fs from 'fs';
import * as path from 'path';
const emoji = require('markdown-it-emoji');
require('dotenv').config();

const websiteUrl = 'https://ben-notes.vercel.app/#/repos';
const twitterUrl = 'https://twitter.com/re4388';
const linkedInUrl = 'https://www.linkedin.com/in/pinweihu/';
const mediumUrl = 'https://medium.com/@hupinwei';
const devToUrl = 'https://dev.to/re4388';
const badgeHeight = '25';

md.use(emoji);

(async () => {
  const twitterBadge = `[<img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" height=${badgeHeight}>](${twitterUrl})`;
  const linkedInBadge = `[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" height=${badgeHeight}>](${linkedInUrl})`;
  const mediumBadge = `[<img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" height=${badgeHeight}>](${mediumUrl})`;
  const devToBadge = `[<img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" height=${badgeHeight}>](${devToUrl})`;

  /* assemble the content ver1 */
  // TODO: repo variable is broken, fix when I have time
  // text = `👋 Hi, I am Ben Hu, currently working on [MuenAI](https://www.muenai.com/).
  // \n\n${twitterBadge} ${linkedInBadge}${mediumBadge} ${devToBadge}
  // \n\n ❤ [Check out my website](${websiteUrl})
  // \n\n# Latest GitHub Repo\n${repo}\n
  // \n\n \n  🙌Inspired by [Mokkapps (Michael Hoffmann)](https://github.com/Mokkapps) & [Building a self-updating profile README for GitHub](https://simonwillison.net/2020/Jul/10/self-updating-profile-readme/)
  // `;

  /* assemble the content ver 2*/
  let text = `👋 Hi, I am Ben Hu, a coder have passion :).
    \n\n${twitterBadge} ${linkedInBadge}${mediumBadge} ${devToBadge}
    \n\n ❤ [Check out my website](${websiteUrl})
    \n\n ❤ Today I learned
    \n\n

    `;

  const tilFolderPath = './til';
  const folders: string[] = fs.readdirSync(tilFolderPath);
  console.log('topics :', folders);

  let tilSummary: Til = {};

  for (const folder of folders) {
    const titles: string[] = [];
    const folderPath = `./til/${folder}/`;
    fs.readdirSync(folderPath).map((fileName: string) => {
      titles.push(getFileNameWithoutExt(fileName));
    });
    tilSummary[folder] = titles;
  }

  // console.log('tempObj :', tilSummary);

  function getFileNameWithoutExt(fileName: string) {
    return path.basename(fileName, path.extname(fileName));
  }

  // let text: string = '';

  for (const [key, values] of Object.entries(tilSummary)) {
    text += `\n\n ## ${key}\n`;

    for (const title of values) {
      text += `- [${title}](https://github.com/re4388/til/blob/master/${whiteSpaceAdder(
        key
      )}/${whiteSpaceAdder(title)})\n`;
    }
  }

  console.log(text);

  function whiteSpaceAdder(text: string) {
    return text.replace(/ /g, '%20');
  }

  /* covert md to html */
  const result = md.render(text);

  /* overwrite README.md */
  fs.writeFile('README.md', result, function (err) {
    if (err) return console.log(err);
    console.log(`${result} > README.md`);
  });
})();
