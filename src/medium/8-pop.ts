// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element

type Pop<T extends any[]> =  T extends [...infer Result, any] ? Result : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]