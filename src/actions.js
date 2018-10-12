import store from "./store";
import { push } from 'connected-react-router'

const API_HOST = 'http://test-api.ezi.co.ua';

const ajax = (method, path, data, cb, err_cb) => {
    const json  = JSON.stringify(data);
    const url   =  API_HOST + path;
    const x     = new XMLHttpRequest();
    const token = store.getState().token;

    x.open(method, url, true);
    token && x.setRequestHeader('AccessToken', token);
    x.setRequestHeader('Content-type', 'application/json');
    x.responseType = 'json';
    x.onload  = () => cb(x.response);
    x.onerror = () => err_cb(x.response);
    x.send(json);
};

const errorHandler = err => {
    console.log(err);
    showMsg('error', err);
};



/** _________ Auth _________ **/
export function login(data, err_cb) {
    ajax('POST', '/auth', data,
        res => {
            if(res.token) {
                store.dispatch({type: 'SET_TOKEN', data: res.token });
                data.remember && localStorage.setItem('token', res.token);

            } else {
                err_cb && err_cb(res.errors);
            }

        },
        errorHandler,
    );
}

export function logout() {
    store.dispatch({type: 'SET_TOKEN', data: null });
    localStorage.removeItem('token');
    goTo('/');
}

export function recoveryPassword(data, err_cb) {
    ajax('POST', '/password-recovery', data,
        res => {
            if(res.status === 'success') {
                goTo('/success-recovery');

            } else {
                err_cb && err_cb(res.errors);
            }
        },
        errorHandler,
    );
}



/** _________ User _________ **/
export function getUsers() {
    ajax('GET', '/users/get', null,
        res => {
            store.dispatch({type: 'SET_USERS', data: res});
        },
        errorHandler,
    );
}

export function showUserModal(data) {
    store.dispatch({type: 'SET_ITEM_FOR_USER_MODAL', data});
}

export function hideUserModal() {
    store.dispatch({type: 'SET_ITEM_FOR_USER_MODAL', data: null});
}

export function showUserConfirmModal(data) {
    store.dispatch({type: 'SET_USER_FOR_CONFIRM_MODAL', data});
}

export function hideUserConfirmModal() {
    store.dispatch({type: 'SET_USER_FOR_CONFIRM_MODAL', data: null});
}

export function addUser(data, cb) {
    ajax('POST', '/users/add', data,
        res => {
            if(res.status === 'success') cb();
        },
        errorHandler,
    );
}

export function updateUser(data, cb) {
    ajax('POST', '/users/update', data,
        res => {
            if(res.status === 'success') cb();
        },
        errorHandler,
    );
}

export function removeUser(data, cb) {
    ajax('POST', '/users/remove', data,
        res => {
            if(res.status === 'success') cb();
        },
        errorHandler,
    );
}

export function saveUser(item, cb) {
    const users = store.getState().users;
    const index = users.map(i => i.id).indexOf(item.id);

    if(users[index]) {
        updateUser(item, () => {
            getUsers();
            cb();
        });

    } else {
        addUser(item, () => {
            getUsers();
            cb();
        });
    }
}



/** _________ Other _________ **/
export function showMsg(type, text = '') {
    new window.Noty({type, text}).show();
}

export function goTo(path) {
    store.dispatch(push(path))
}
