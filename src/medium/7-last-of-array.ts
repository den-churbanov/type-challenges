// Implement a generic Last<T> that takes an Array T and returns its last element.

export type Last<T extends any[]> = T extends [...any, infer T] ? T : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  Expect<Equal<Last<[null]>, null>>,
]
