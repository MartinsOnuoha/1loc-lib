# 1Loc Lib

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A library of witty Javascript one-liner functions. The [1loc.dev](https://1loc.dev/) website has a collection of useful Javascript one-liners, now you get to use them in your Javascript projects.

One Liners are great, but the rest of your team would appreciate a little more clarity, So we've abstracted them for you, as readeable function names, so you and your teammates can focus on important stuff.

## TOC

- [1Loc Lib](#1loc-lib)
  - [TOC](#toc)
  - [Coverage](#coverage)
  - [Getting Started](#getting-started)
  - [Import Any One-liner and use](#import-any-one-liner-and-use)
  - [Explore a list of possible One-liners](#explore-a-list-of-possible-one-liners)
  - [One Liners](#one-liners)

## Coverage

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   99.12 |    75.68 |   98.61 |     100 |
 array.ts |     100 |     87.5 |     100 |     100 | 8,183,214
 dom.ts   |   94.44 |    53.85 |   88.89 |     100 | 16-61

## Getting Started

Install the 1Loc library using `yarn` or `npm`

```console
yarn add 1loc
```

or using npm

```console
npm i 1loc --save
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

[Documentation Here](https://martins-victor.gitbook.io/1loc-lib/)

You can also visit the original 1loc website [here](https://1loc.dev/).

## One Liners

Here's a collection of function definitions and what they do.
