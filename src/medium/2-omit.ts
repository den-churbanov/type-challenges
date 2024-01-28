// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K

import { MyPick } from '../easy/1-pick';

export type MyOmit<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}