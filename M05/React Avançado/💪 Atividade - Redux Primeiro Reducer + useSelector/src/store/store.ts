import { createStore, combineReducers, Store } from "redux"
import fruitsReducer from "./modules/fruits/reducer"

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  fruits: fruitsReducer
})

const store: Store<RootState> = createStore(reducers)

export default store