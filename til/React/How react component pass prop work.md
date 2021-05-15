# Question: How react component pass prop work

## We use JS function syntax to return JSX.

Below is we defined a react component named `Welcome`

```ts
export default function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}</h1>;
}
```

In this case, we pass a "property object" (shorthand: props) with a name attribute

It's like a object called props and
with a key called name, the value of this key we will pass will be "Rust"

## How to use

This is how to use this component

```ts
<Welcome name="Rust" />
```

## Be careful the difference

Careful!! I always think that we passed "Rust" string into Welcome component when I first see this. But no, no, no, we are passing a props object with a name attribute.

---

Hence, inside function body, we use props.name to access the value

```ts
export default function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Destructuring syntax to pass parameter

---

Or you can use destructuring make make code concise (we also seperate type to make it cleaner)

```ts
interface LangType {
  name: string;
}
export default function Welcome({ name }: LangType) {
  return <h1>Hello, {name}</h1>;
}
```
