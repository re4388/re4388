// node.js, "classic" way:

/* markdown syntax => html */


// var MarkdownIt = require('markdown-it'),
//     md = new MarkdownIt();
// var result = md.render('# markdown-it rulezz!');
// console.log(result);
// // node.js, the same, but with sugar:
// var md = require('markdown-it')();
// var result = md.render('# markdown-it rulezz!');
// console.log(result);

// // browser without AMD, added to "window" on script load
// // Note, there is no dash in "markdownit".
// var md = window.markdownit();
// var result = md.render('# markdown-it rulezz!');