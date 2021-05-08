## 2 lessons:

- If I have to ensure state b happen after state a (maybe you are measure performance, you need to mark start time before end time) and then do stuff.

  - DO NOT assume this behavior by experiments. Says I have made lots of experiment to show that state b is always runs after state A.
  - I must enforce this behavior by code. For example, a logic like if state a have not happened following b, then I will not do stuff.

- I need to have pretty good idea to change the existing and working code, especially the code is involving the app-state, which impact at the whole-app-level.
  - I need to take effort to think through what side effects.
  - If this extra effort might not merit, try use existing code to build.
  - BTW, above suggestion is not included for the refactor ticket, which is meant to improve the existing code.
