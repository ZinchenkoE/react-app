import React, {Component} from "react";
import {connect} from "react-redux";
import PAGE_STRUCTURE from "../data/page-structure";


class PageHeader extends Component {
    render() {
        const title = PAGE_STRUCTURE.find(item => item.path === this.props.pathname).title;

        return (
            <div className="page-header page-header-light">
                <div className="page-header-content header-elements-md-inline">
                    <div className="page-title d-flex">
                        <h4>
                            <span className="font-weight-semibold">{title}</span>
                        </h4>
                        <a className="header-elements-toggle text-default d-md-none">
                            <i className="icon-more"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const f = state => ({pathname: state.router.location.pathname});
export default connect(f)(PageHeader);
