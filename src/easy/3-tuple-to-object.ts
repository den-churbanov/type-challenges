// Given an array, transform it into an object type and the key/value must be in the provided array.

// PropertyKey = string | number | symbol
type MyPropertyKey = (keyof any);

type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, {
    'tesla': 'tesla',
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y'
  }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1, 2: 2, 3: 3, 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleSymbol>, { [sym1]: typeof sym1, [sym2]: typeof sym2 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1, '2': '2', 3: 3, '4': '4', [sym1]: typeof sym1 }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>