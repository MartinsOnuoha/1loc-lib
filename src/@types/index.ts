export interface AnyObject extends Record<string | number, any> {}

export interface Person {
  name: string,
  age: number,
  [index: number|string]: any
}
