import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router";
import {Redirect} from "react-router-dom";

import LoginPage from "./views/LoginPage";
import Dashboard from "./views/Dashboard";
import PwdRecoveryPage from "./views/PwdRecoveryPage";
import SuccessRecoveryPage from "./views/SuccessRecoveryPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props);
        const token = this.props.token;
        const pathname = this.props.router.location.pathname;
        const isGuestPages = ['/', '/password-recovery', '/success-recovery'].includes(pathname);

        if(!token && !isGuestPages)    return <Redirect to="/" />;
        else if(token && isGuestPages) return <Redirect to="/dashboard" />;

        return (
            <div id="app">
                <Switch>
                    <Route path='/' exact            component={LoginPage} />
                    <Route path='/password-recovery' component={PwdRecoveryPage} />
                    <Route path='/success-recovery'  component={SuccessRecoveryPage} />
                    <Route path='/dashboard'         component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default connect(state => state)(App);
