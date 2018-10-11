import React, { Component } from "react";
import {logout, showMsg} from "../actions";

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-md navbar-dark bg-indigo fixed-top">
                <div className="navbar-brand">
                    <a href="/" className="d-inline-block">
                        <img src="https://ezi.co.ua/img/logo-yellow.svg" alt="" />
                    </a>
                </div>

                <div className="d-md-none">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                        <i className="icon-tree5"/>
                    </button>
                    <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
                        <i className="icon-paragraph-justify3"/>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbar-mobile">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                                <i className="icon-paragraph-justify3"/>
                            </span>
                        </li>
                    </ul>

                    <span className="navbar-text ml-md-3">
                        <span className="badge badge-mark border-orange-300 mr-2" />
                        Доброго дня, Username!
                    </span>

                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item dropdown" onClick={() => this.searchIconClick()}>
                            <span className="navbar-nav-link">
                                <i className="icon-search4"/>
                            </span>
                        </li>
                        <li className="nav-item dropdown" onClick={() => this.chatIconClick()}>
                            <span className="navbar-nav-link">
                                <i className="icon-comments"/>
                            </span>
                        </li>
                        <li className="nav-item dropdown" onClick={() => this.bellIconClick()}>
                            <span className="navbar-nav-link">
                                <i className="icon-bell2"/>
                            </span>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle legitRipple" data-toggle="dropdown">
                                <i className="icon-sphere3"/>
                            </span>
                            <div className="dropdown-menu dropdown-menu-right dropdown-content ezi-lang-dropdown">
                                <div className="dropdown-content-body dropdown-scrollable">
                                    <ul className="media-list">
                                        <li className="media">RU</li>
                                        <li className="media">UK</li>
                                        <li className="media">EN</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item" onClick={() => logout()}>
                            <span className="navbar-nav-link">
                                <i className="icon-switch2"/>
                                <span className="d-md-none ml-2">Logout</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    searchIconClick() {}

    chatIconClick() {
        showMsg('success', 'Тест уведомления');
    }

    bellIconClick() {}
}

export default Header;
