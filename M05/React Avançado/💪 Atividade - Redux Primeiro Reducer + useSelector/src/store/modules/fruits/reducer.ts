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

const fruitsReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRUIT": {
      const { payload } = action
      return [...state, payload]
    }

    default:
      return state
  }
}

export default fruitsReducer