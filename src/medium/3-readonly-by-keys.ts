// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
import { MyOmit } from './2-omit';
import { MyPick } from '../easy/1-pick';
import { MyReadonly } from '../easy/2-readonly';

type ReadonlyByKeys<T, K extends keyof T = keyof T> = MyOmit<T, K> & MyReadonly<MyPick<T, K>>;

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '../utils';


type cases = [
  Expect<Alike<ReadonlyByKeys<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<ReadonlyByKeys<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<ReadonlyByKeys<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<ReadonlyByKeys<Todo2, 'description'>, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}