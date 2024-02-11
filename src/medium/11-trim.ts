import type { Equal, Expect } from '../utils';

type Space = '\n' | '\t' | ' ';
// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
type TrimLeft<S extends string> = S extends `${Space}${infer Result}` ? TrimLeft<Result> : S;

/* _____________ Test Cases _____________ */

type cases1 = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

// Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.
type TrimRight<S extends string> = S extends `${infer Result}${Space}` ? TrimRight<Result> : S;

/* _____________ Test Cases _____________ */

type cases2 = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]


// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
type Trim<S extends string> = TrimRight<TrimLeft<S>>;

/* _____________ Test Cases _____________ */

type cases3 = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]