import { createStore, applyMiddleware, compose } from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import history from "./history"

const initialState = {
    a: 'a',
    token: localStorage.getItem('token'),
};

function mainReducer(state, action) {
    // console.log(action.type);

    switch (action.type) {
        case 'SET_A':
            return {...state, a: action.data};

        case 'SET_TOKEN':
            return {...state, token: action.data};

        default:
            return state
    }
}

const store = createStore(
    connectRouter(history)(mainReducer),
    initialState,
    compose(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
);

export default store;
