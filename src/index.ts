const md = require('markdown-it')({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Auto convert URL-like text to links
});
const emoji = require('markdown-it-emoji');
md.use(emoji);

import * as fs from 'fs';
import { genTILData } from './genTIL';
import { welcomeMessage } from './welcomeMsg';
require('dotenv').config();

const result = md.render(welcomeMessage + genTILData().allTitleAndUrlInMd);

fs.writeFile('README.md', result, function (err) {
  if (err) return console.log(err);
  console.log(`${result} > README.md`);
});
