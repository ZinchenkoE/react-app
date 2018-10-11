import React, {Component} from "react";
import {Link} from "react-router-dom";

class SuccessRecoveryPage extends Component {
    render() {
        return (
            <div className="page-content login-cover">
                <div className="content-wrapper">
                    <div className="content d-flex justify-content-center align-items-center">
                        <div className="card mb-0">
                            <div className="card-body p-4">
                                <div className="text-center mb-3">
                                    <h5 className="mb-0">Дякуємо, пароль надіслано Вам на пошту.</h5>
                                </div>
                                <Link to="/" className="btn bg-blue btn-block legitRipple">Повернутися</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuccessRecoveryPage;
