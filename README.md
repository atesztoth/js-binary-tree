# js-binary-tree

Implementation of a binary tree with both TS and flow support.

_(Babel got me so upset I decided not to solve an issue \ 
regarding babel builds more on that later...)_

## How to use?
Just import the `binTreeBuilder` to your project, and tell it what properties \
you would like to see in the final result.

You can define it using an array of `TreeCutter<T, U>`.

Example:
```typescript
const cutters: TreeCutter<ValueTypes, ValueTypes>[] = [
  { type: ['Model S', 'Model 3'] } 
]
```

Cutters tell the builder to take a node, then split the tree here \
**keeping all the information** in the nodes, and creating two new one.

Result will be like this:
```typescript
{
  "node": {
    "manufacturer": "Tesla"
  },
  "left": {
    "node": {
      "manufacturer": "Tesla",
      "type": "Model S"
    }
  },
  "right": {
    "node": {
      "manufacturer": "Tesla",
      "type": "Model 3"
    }
  }
}
```

## Misc
It "remembers about the history" in every node **ON PURPOSE**. \
Another version is coming with an option to turn it off. _(Need For Time ™)_

