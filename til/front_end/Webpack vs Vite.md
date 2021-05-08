Question:
Webpack vs Vite

Short Ans:

Webpack has advantage on its production-tested and vast ecosystem.
Vite is faster is still have bug and not battle-tested on production

Longer Ans:

Webpack Process:

1. get entry point and then setup the dependence tree
2. the compile process (lexing, parsing, linking, code gen)

Vite Process:

1. find module as script tag, Vite intercept the http request from browser to server
2. lazy load dependency
3. In term of compile process, it delegate to esbuild (which is faster than webpack 10x ~100+x)
4. use ES module system, so it just let the browser do the packaging work.

Reference:
[Vite 和 Webpack 的核心差异 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1801741)
