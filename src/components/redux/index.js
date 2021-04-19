import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers"

const logger = (store) => (next) => (action) => {
    console.log(action);

    next(action)
}

const middlewares = [logger];

export const store = createStore (
    reducer,
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

