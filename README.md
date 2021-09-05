# 1Loc Lib

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A library of witty Javascript one-liner pure functions. The [1loc.dev](https://1loc.dev/) website has a collection of useful Javascript one-liners, now you get to use them in your Javascript projects.

## Getting Started

Install the 1Loc library using `yarn` or `npm`

```console
yarn add 1loc
```

or using npm

```console
npm i 1loc
```

## Import Any One-liner and use

```js
import { cloneArray } from '1loc'

const myArray = [{ name: 'me', age: 2}]
const arrayClone = cloneArray(myArray) // [{ name: 'me', age: 2}]

```

More Examples

```js
import { arrayHasSameValues } from '1loc'

const hasSameValues = arrayHasSameValues([1, 2, 4], [4, 1, 2])

console.log(hasSameValues) // true
```

## Explore a list of possible One-liners

You can either visit the original 1loc website [here](https://1loc.dev/) or use the documentation that shows the function names used by the library. [here](https://1loc.dev/)
