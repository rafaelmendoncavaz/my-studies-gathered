import type { Action, CounterAction } from "./reducer"

export type AddFruit = (fruit: string) => Action



export const addFruit: AddFruit = (fruit) => {
  return {
    type: 'ADD_FRUIT',
    payload: fruit
  }
}

export type Counter = () => CounterAction

export const increment: Counter = () => {
  return {
    type: 'ADD_ONE',
    payload: 1
  }
}

export const decrement: Counter = () => {
  return {
    type: 'REMOVE_ONE',
    payload: 1
  }
}