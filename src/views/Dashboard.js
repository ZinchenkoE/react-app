import React, {Component} from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeader from "./PageHeader";
import Conversations from "./Conversations";
import Page from "./Page";
import {Route, Switch} from "react-router";
import BanksPage from "./BanksPage";

class Dashboard extends Component {
    componentDidMount() {
        window._App.initBeforeLoad();
        window._App.initCore();
        window._App.initAfterLoad();
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
                            <Route path='/dashboard' exact   component={Conversations} />
                            <Route path='/dashboard/banks'   component={BanksPage} />
                            <Route path='/dashboard/page'    component={Page} />
                        </Switch>

                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
