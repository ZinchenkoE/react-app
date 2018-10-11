import React, {Component} from "react";

class PageHeader extends Component {
    render() {
        return (
            <div className="page-header page-header-light">
                <div className="page-header-content header-elements-md-inline">
                    <div className="page-title d-flex">
                        <h4>
                            <i className="icon-arrow-left52 mr-2"/>
                            <span className="font-weight-semibold">Розмови</span>
                        </h4>
                        <a className="header-elements-toggle text-default d-md-none">
                            <i className="icon-more"/>
                        </a>
                    </div>
                </div>

                <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                    <div className="d-flex">
                        <div className="breadcrumb">
                            <a className="breadcrumb-item"><i className="icon-home2 mr-2"/>Інфопанель</a>
                            <span className="breadcrumb-item active">Розмови</span>
                        </div>
                        <a className="header-elements-toggle text-default d-md-none">
                            <i className="icon-more"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHeader;
