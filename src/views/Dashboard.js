import React, {Component} from "react";
import {Route, Switch} from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PageHeader from "./PageHeader";
import MainPage from "./MainPage";
import UsersPage from "./UsersPage";

class Dashboard extends Component {
    componentDidMount() {
        window.__plugins.initBeforeLoad();
        window.__plugins.initCore();
        window.__plugins.initAfterLoad();
    }

    render() {
        return (
            <div id="dashboard" className="navbar-top">
                <Header />

                <div className="page-content">

                    <Sidebar />

                    <div className="content-wrapper">
                        <PageHeader />

                        <Switch>
                            <Route path='/dashboard' exact   component={MainPage} />
                            <Route path='/dashboard/users'   component={UsersPage} />
                        </Switch>

                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
