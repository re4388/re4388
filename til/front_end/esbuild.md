Question:

What is esbuild, and why it's faster than other bundler?

Short Ans:

esbuild is a frontend package bundler, faster than webpack 10x-100x, it's written in Go and use Parallelism a lot and all written in one team(control code base with dedicated on performance)

Longer Ans:

The key is why esbuild is fast?

1. It written in Go.
   - Webpack is written is JS, it has node.js runtime overhead.
   - Since it written in Go, it also utilize multi-core as many as possible. (Parallelism use heavily)
   - Unlike webpack rely on many 3-party loader, libraries, esbuild is all built by its own and from scratch, it can build with high performance in mind and stick to central principles.
     - In details, it use memory more efficiently.
       - Unlike JS, Go have shared heap among multi-thread by design
       - Design to run through the whole AST tree process as less as possible.

Reference:
[esbuild - FAQ](https://esbuild.github.io/faq/)
