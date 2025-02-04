import {combineReducers, legacy_createStore as createStore } from "redux";
import {todoReducer} from "./reducers/todoReducer";

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store