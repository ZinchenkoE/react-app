import store from "./store";
import { push } from 'connected-react-router'



// const API_HOST = 'https://api.prostir.tk';
// const API_HOST = 'http://localhost';
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



export function login(data, err_cb) {
    ajax('POST', '/auth', data,
        res => {
            if(res.token) {
                store.dispatch({type: 'SET_TOKEN', data: res.token });
                data.remember && localStorage.setItem('token', res.token);
                // goTo('/dashboard');

            } else {
                err_cb && err_cb(res.errors);
            }

        },
        err => {
            console.log(err);
            showMsg('error', err);
        },
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
        err => {
            console.log(err);
            showMsg('error', err);
        },
    );
}

export function showMsg(type, text = '') {
    new window.Noty({type, text}).show();
}

export function goTo(path) {
    store.dispatch(push(path))
}
