// Type the function PromiseAll that accepts an array of PromiseLike objects,
// the returning value should be Promise<T> where T is the resolved result array.

import { MyAwaited } from '../easy/7-awaited';

declare function PromiseAll<T extends readonly unknown[]>(values: [...T]): Promise<{
  -readonly [P in keyof T]: MyAwaited<T[P]>
}>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils';

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]