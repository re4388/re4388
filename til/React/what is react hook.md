# Question: What is React Hook

https://reactjs.org/docs/hooks-overview.html

---

# Answer:

## 1. Why need it?

### Easily reuse stateful logic between components

### Rather than split based on life-cycle methods, we split similar stateful logic into many function

### use more of React’s features without classes

## 2. what is Hook?

### Hooks are functions that let you “hook into” React state and lifecycle features from function components.

## 3. 2 kinds of Hook

### State Hook: useState

- to add local state
- one of the common built-in hook

### Effect Hook: useEffect

- Effect Hook perform side effect in function comp

  - what is side effect?

    - data fetching
    - subscription
    - Changing DOM
    - ...

- Run the effects after every render — including the first render.
- Optionally specify how to “clean up” after them by returning a function

## 4. Rules of Hooks

### Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.

### Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

## 6. Finally, see example and write hook yourself to learn!

## 5. When would I use a Hook?

### Previously we had to use class component to having local state, now, we can use function component with hook.

link: http://www.xmind.net/m/p2r9NQ
