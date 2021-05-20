## Demo Code

```js
const objectWithProp = {
  key1: 23,
  array: ['a', 'b', 'c', 'd'],
  key2: 's1',
  key3: {
    key4: 23,
    key5: {
      key6: '22',
    },
  },
};

const { key1 } = objectWithProp;
console.log(key1); // 23

const { 0: ele1, 3: ele3 } = objectWithProp.array;
console.log(ele1); // a
console.log(ele3); // d

const { key6 } = objectWithProp.key3.key5;
console.log(key6); // 22
```
