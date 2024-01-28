// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

type TupleToUnion<T> = T extends readonly any[] ? T[number] : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
  Expect<Equal<TupleToUnion<[1, 2, '3']>, 1 | 2 | '3'>>,
]