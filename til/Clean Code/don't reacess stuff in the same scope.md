# Question: Can you spot the problem of this function?

---

Hint: it didn't resuse something, therefore it lower the speed

```ts
function demoFn(state) {
  const result = {};

  const displayHeader = state.principal.image.getHeader;

  for (const stackId of Object.keys(displayHeader)) {
    const imageFileSeries = state.derived.image.imageFile[stackId];
    const displayHeaders = state.principal.image.getHeader[stackId];

    const stackMetricProperty = {
      // skip
    };
    result[stackId] = stackMetricProperty;
  }

  return result;
}
```

Ans:

```ts
function demoFn(state) {
  const result = {};

  // we ger displayHeader by state.principal.image.getHeader
  const displayHeader = state.principal.image.getHeader;

  for (const stackId of Object.keys(displayHeader)) {
    const imageFileSeries = state.derived.image.imageFile[stackId];

    // bad: we don't reuse the above logic and instead and go that state to re-get the data again
    // which, in some situation, like db access, will make this logic slower in a significant way
    const displayHeaders = state.principal.image.getHeader[stackId];

    const stackMetricProperty = {
      // skip
    };
    result[stackId] = stackMetricProperty;
  }

  return result;
}
```
