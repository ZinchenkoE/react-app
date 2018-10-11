import { createStore, applyMiddleware, compose } from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import history from "./history"

const initialState = {
    token: localStorage.getItem('token'),
    users: [],
    userForModal: null,
    userForConfirmModal: null,
};

function mainReducer(state, action) {
    // console.log(action.type);

    switch (action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.data};

        case 'SET_USERS':
            return {...state, users: action.data};

        case 'SET_ITEM_FOR_USER_MODAL':
            return {...state, userForModal: action.data};

        case 'SET_USER_FOR_CONFIRM_MODAL':
            return {...state, userForConfirmModal: action.data};

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
