import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router";
import history from "./history";
import store from "./store";
import App from "./App";
import "./scss/index.css";
import registerServiceWorker from "./registerServiceWorker";

window.app = ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
