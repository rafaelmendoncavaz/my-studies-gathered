import type { Action } from "./reducer"

export type AddFruit = (fruit: string) => Action

export const addFruit: AddFruit = (fruit) => {
  return {
    type: 'ADD_FRUIT',
    payload: fruit
  }
}