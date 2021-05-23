const md = require('markdown-it')({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Auto convert URL-like text to links
});

import * as fs from 'fs';
import { genTIL } from './genTIL';
const emoji = require('markdown-it-emoji');
require('dotenv').config();

const WebsiteUrl = 'https://ben-notes.vercel.app/#/repos';
const TwitterUrl = 'https://twitter.com/re4388';
const LinkedInUrl = 'https://www.linkedin.com/in/pinweihu/';
const MediumUrl = 'https://medium.com/@hupinwei';
const DevToUrl = 'https://dev.to/re4388';
const badgeHeight = '25';
const TwitterBadge = `[<img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" height=${badgeHeight}>](${TwitterUrl})`;
const linkedInBadge = `[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" height=${badgeHeight}>](${LinkedInUrl})`;
const MediumBadge = `[<img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" height=${badgeHeight}>](${MediumUrl})`;
const DevToBadge = `[<img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" height=${badgeHeight}>](${DevToUrl})`;

md.use(emoji);

let text = `👋 Hi, I am Ben Hu, a coder have passion :).
    \n\n${TwitterBadge} ${linkedInBadge}${MediumBadge} ${DevToBadge}
    \n\n ❤ [Check out my website](${WebsiteUrl})
    \n\n # Today I learned
    \n\n
    `;

const TilFolderPath = './til';
const tilData = genTIL(TilFolderPath).text;
const result = md.render(text + tilData);

fs.writeFile('README.md', result, function (err) {
  if (err) return console.log(err);
  console.log(`${result} > README.md`);
});
