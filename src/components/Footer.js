import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="text-center d-lg-none w-100">
                    <button type="button" className="navbar-toggler dropdown-toggle"
                            data-toggle="collapse" data-target="#navbar-footer">
                        <i className="icon-unfold mr-2" />
                        Footer
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="navbar-footer">
					<span className="navbar-text">&copy; 2018. React Admin</span>
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item">
                            <a href="https://google.com/" className="navbar-nav-link" target="_blank" rel="noopener noreferrer">
                                <i className="icon-lifebuoy mr-2" /> Поддержка
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
