import React, {Component} from "react";

class Page extends Component {
    render() {
        return (
            <div className="content">
                <div className="card">
                    <div className="card-header header-elements-inline">
                        <h5 className="card-title">Page example</h5>
                        <div className="header-elements">
                            <div className="list-icons">
                                <a className="list-icons-item" data-action="collapse"> </a>
                                <a className="list-icons-item" data-action="reload"> </a>
                                <a className="list-icons-item" data-action="remove"> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
