

export type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2)
    ? true
    : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<IsEqual<'a', 'a'>, true>>,
  Expect<Equal<IsEqual<[], []>, true>>,
  Expect<Equal<IsEqual<[], ['a']>, false>>,
  Expect<Equal<IsEqual<{}, []>, false>>,
  Expect<Equal<IsEqual<{}, null>, false>>,
  Expect<Equal<IsEqual<undefined, null>, false>>,
  Expect<Equal<IsEqual<() => any, () => never>, false>>,
]
