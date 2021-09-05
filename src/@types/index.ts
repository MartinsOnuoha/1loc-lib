export interface AnyObject {
  [index: number|string]: any
}

export interface Person {
  name: string,
  age: number,
  [index: number|string]: any
}

export enum Order {
  ASC = 1,
  DESC = 0
}
