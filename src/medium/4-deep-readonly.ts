// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
// You can assume that we are only dealing with Objects in this challenge.
// Arrays, Functions, Classes and so on do not need to be taken into consideration.
// However, you can still challenge yourself by covering as many different cases as possible.

type DeepReadonly<T> = {
  readonly [K in keyof T]:
  T[K] extends Record<any, any>
    ? T[K] extends (...args: any[]) => any
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K];
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
  Expect<Equal<DeepReadonly<X3>, Expected3>>,
]

type X1 = {
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected1 = {
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}

type X3 = {
  a: () => 22
}

type Expected3 = {
  readonly a: () => 22
}

type X2 = { a: string } | { b: number }

type Expected2 = { readonly a: string } | { readonly b: number }