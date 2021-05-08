## Q:

Careful on type missing surprise when use TS index signature

## A:

when use TS index signature, try add undefined to this pron-to-error type

```ts
export interface StackMetricPropertyByUid {
  [stackId: string]: StackMetricProperty | undefined;
}
```

The reason to add this undefined, is because you want to make sure when you access the value, it's still possible to get undefined, but index signature will not tell you.
