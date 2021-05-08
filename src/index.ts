const md = require('markdown-it')({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Auto convert URL-like text to links
});

import * as fs from 'fs';
import { genTIL } from './genTIL';
const emoji = require('markdown-it-emoji');
require('dotenv').config();

const Website_Url = 'https://ben-notes.vercel.app/#/repos';
const Twitter_Url = 'https://twitter.com/re4388';
const LinkedIn_Url = 'https://www.linkedin.com/in/pinweihu/';
const Medium_Url = 'https://medium.com/@hupinwei';
const DevTo_Url = 'https://dev.to/re4388';
const Badge_Height = '25';
const Twitter_Badge = `[<img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" height=${Badge_Height}>](${Twitter_Url})`;
const LinkedIn_Badge = `[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" height=${Badge_Height}>](${LinkedIn_Url})`;
const Medium_Badge = `[<img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" height=${Badge_Height}>](${Medium_Url})`;
const DevTo_Badge = `[<img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" height=${Badge_Height}>](${DevTo_Url})`;

md.use(emoji);

/**
 * The only reason to keep this async un-remove is cuz I may want to
 * add await fn inside maybe sooner?!
 */
(async () => {
  let text = `👋 Hi, I am Ben Hu, a coder have passion :).
    \n\n${Twitter_Badge} ${LinkedIn_Badge}${Medium_Badge} ${DevTo_Badge}
    \n\n ❤ [Check out my website](${Website_Url})
    \n\n ❤ Today I learned
    \n\n
    `;

  const result = md.render(text + genTIL());

  fs.writeFile('README.md', result, function (err) {
    if (err) return console.log(err);
    console.log(`${result} > README.md`);
  });
})();
