import { createStore, combineReducers, Store } from "redux"
import { counterReducer, fruitsReducer } from "./modules/fruits/reducer"

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  fruits: fruitsReducer,
  counter: counterReducer
})

export const store: Store<RootState> = createStore(reducers)