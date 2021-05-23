What is `importHelpers` tag in tsconfig?

Answer:

If this tag is on, when TS make some down-leveling operation, instead of inserted into helper function codes into modules, it will get the helper functions from tslib library. If you don't have this flag on, you may have many duplicated code on modules that require down leveling operation.

Note:

What is down-leveling?

It is a term used in TS, meaning to transpiling to order version of JS. you also can set `downlevelIteration` flag, this flag enable more accurate implementation in transpile process.

Ref: https://www.typescriptlang.org/tsconfig#downlevelIteration
