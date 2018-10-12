import React, {Component} from "react";
import {Route, Switch} from "react-router";
import {connect} from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PageHeader from "./PageHeader";
import MainPage from "./MainPage";
import UsersPage from "./UsersPage";
import UserModal from "../components/UserModal";
import ConfirmModal from "../components/ConfirmModal";
import {getUsers, hideUserConfirmModal, hideUserModal, removeUser, saveUser} from "../actions";

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

                {this.props.userForModal &&
                <UserModal
                    item={this.props.userForModal}
                    onCloseModal={() => hideUserModal()}
                    onSubmit={item => saveUser(item, () => hideUserModal())}
                />
                }

                {this.props.userForConfirmModal &&
                <ConfirmModal
                    title="Remove Bookmark?"
                    item={this.props.userForConfirmModal}
                    onCloseModal={() => hideUserConfirmModal()}
                    onSubmit={item => removeUser(item, () => { hideUserConfirmModal(); getUsers(); })}
                />
                }
            </div>
        );
    }
}

export default connect(state => state)(Dashboard);
