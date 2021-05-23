What does it mean when I see `...arr` in function parameter?

A:

It is a "spread form" of the array, so you just set multi part of argument into this fn, the arr stuff will group back to array

```js
function t1(...arr) {
  // spread from of arr: ...arr
  console.log(arr); // group back
}

t1(1, 2, 3); // [1,2,3]
```

Use case?

You need to do something with function argument but you can't tell in advance how many argument, you can use this technique to group them together in function body

```js
function sumUpParameter(...arr) {
  // use reduce to sum up all element in the passed array
  const result = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(result);
}

sumUpParameter(1, 2, 3); // 6
sumUpParameter(1, 2, 3, 4); // 10
sumUpParameter(1, 2, 3, 4, 5); // 15
```
