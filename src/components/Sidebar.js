import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import PAGE_STRUCTURE from "../data/page-structure";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar sidebar-light sidebar-main sidebar-fixed sidebar-expand-md">
                <div className="sidebar-content">
                    <div className="sidebar-user-material">
                        <div className="sidebar-user-material-body">
                            <div className="card-body text-center">
                                <h6 className="mb-0 text-white text-shadow-dark">Username</h6>
                                <span className="font-size-sm text-white text-shadow-dark">email@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="card card-sidebar-mobile">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            {
                                PAGE_STRUCTURE.map((item, i) => (
                                    <li className="nav-item" key={i}>
                                        <NavLink exact to={item.path} className="nav-link" activeClassName="active">
                                            <i className={item.menuIcon} /><span>{item.title}</span>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const f = state => ({pathname: state.router.location.pathname});
export default connect(f)(Sidebar);
