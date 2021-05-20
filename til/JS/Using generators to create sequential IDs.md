```js
function* IdGenerator() {
  let idx = 0;
  while (true) {
    yield idx++;
  }
}

const genId = IdGenerator();

console.log(genId.next().value); // 0
console.log(genId.next().value); // 1
console.log(genId.next().value); // 2
```

Pro:

1. Lazy evaluation, it's on demand whenever the next method is called.
2. No need to rely on global / class-scoped variables.
