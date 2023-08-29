# typescript-generics

### Generics

Perhaps we have a function that takes in an array and removes the last value in that array:

```Typescript
const numbers = [1, 2, 3]
const strings = ['Hello', 'my', 'friend']
const booleans = [true, true, false]
interface Hero {
  name: string
  superPower: string
}

const h1: Hero = {
  name: 'Hulk',
  superPower: 'Super Strong'
}

const h2: Hero = {
  name: 'Superman',
  superPower: 'A god'
}

const h3: Hero = {
  name: 'Flash',
  superPower: 'Super Fast'
}

const h4: Hero = {
  name: 'Batman',
  superPower: 'Super Rich'
}

const heroes = [h1, h2, h3, h4]
function removeLastElement(array: (number | string | boolean | Hero)[]): (number | string | boolean | Hero)[] {
 return array.slice(0, array.length - 1)
}
```

Normally, we'd need to assign a parameter type, but because we have all of these different cases the type assignment becomes more and more unmanagable. To help with this Generics can be used. See an example below:

```typescript
function removeLastElement<MyType>(array: MyType[]): MyType[] {
  return array.slice(0, array.length - 1)
}
```

We've reduced the amount of type assignments down to 1. As far as I can tell, generics, which can be named anything, (we've seen it in the wild called <Value>) are used to tell Typescript "Whatever we put it on this side, needs to come out on this side".

The industry accepted practice, is to name generics, "T" `<T>`
