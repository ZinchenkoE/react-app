import React, {Component} from "react";
import {recoveryPassword} from "../actions";

class PwdRecoveryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fd: {
                email: '',
            },
            err: {
                email: null
            }
        };
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const {fd, err} = this.state;

        return (
            <div className="page-content login-cover">
                <div className="content-wrapper">
                    <div className="content d-flex justify-content-center align-items-center">
                        <form className="login-form" onSubmit={e => this.handleSubmit(e)} autoComplete="off">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <i className="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1" />
                                        <h5 className="mb-0">Відновлення паролю</h5>
                                        <span className="d-block text-muted pl-1 pr-1">Ми надішлемо Вам інструкції по електронній пошті</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-right">
                                        <input type="email" className="form-control" placeholder="Ваш e-mail"
                                               name="email"
                                               value={fd.email}
                                               onChange={e => this.onInputChange(e.target.name, e.target.value)}
                                               required
                                        />
                                        {err.email && <span className="form-text text-danger">{err.email}</span>}
                                        <div className="form-control-feedback"><i className="icon-mail5 text-muted"/></div>
                                    </div>

                                    <button type="submit" className="btn bg-blue btn-block legitRipple">
                                        <i className="icon-spinner11 mr-2" />
                                        Скинути пароль
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    onInputChange(name, value) {
        const state = {...this.state};
        state.fd[name] = value;
        for(let k in state.err) state.err[k] = null;
        this.setState(state);
    }

    handleSubmit(e) {
        e.preventDefault();
        recoveryPassword(this.state.fd, err => {
            const state = {...this.state};
            for(let k in err) state.err[k] = err[k];
            this.setState(state);
        });
    }
}

export default PwdRecoveryPage;
