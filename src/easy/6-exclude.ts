// Implement the built-in Exclude<T, U>

/*
 * @see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 *
 * T (and U?) type is "distributive" in generic conditional type,
 * that means condition of MyExclude utility applied to each member of T union separately
 */

type MyExclude<T, U> = T extends U ? never : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
];

// MyExclude<'a' | 'b' | 'c', 'a'>