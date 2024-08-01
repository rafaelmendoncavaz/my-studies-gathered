export type State = string[]
export type Action = {
  type: string,
  payload: string
}

export type Reducer = (initialState: State, action: Action) => State

const initialState: State = [
  "Banana",
  "Maçã",
  "Morango"
]

export const fruitsReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRUIT": {
      const { payload } = action
      return [...state, payload]
    }

    default:
      return state
  }
}

export type CounterAction = {
  type: 'ADD_ONE' | 'REMOVE_ONE',
  payload: number
}

export const counterReducer = (state = 0, action: CounterAction) => {
  switch (action.type) {
    case 'ADD_ONE': {
      const { payload } = action
      return state + payload
    }

    case 'REMOVE_ONE': {
      const { payload } = action
      return state - payload
    }

    default:
      return state
  }
}