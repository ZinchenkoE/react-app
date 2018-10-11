import React, {Component} from "react";
import {Link} from "react-router-dom";
import {login} from "../actions";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fd: {
                email: '777@mail.ru',
                password: '123456',

                // email: '',
                // password: '',

                remember: false
            },
            err: {
                email: null,
                password: null,
            }
        };
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
                                        <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1" />
                                        <h5 className="mb-0">Увійти в свій акаунт</h5>
                                        <span className="d-block text-muted">Ваші дані</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="email" className="form-control" placeholder="Ваш e-mail"
                                               name="email"
                                               value={fd.email}
                                               onChange={e => this.onInputChange(e.target.name, e.target.value)}
                                               required
                                        />
                                        {err.email && <span className="form-text text-danger">{err.email}</span>}
                                        <div className="form-control-feedback">
                                            <i className="icon-mail5 text-muted"/>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="password" className="form-control" placeholder="Пароль"
                                               name="password"
                                               value={fd.password}
                                               onChange={e => this.onInputChange(e.target.name, e.target.value)}
                                               required
                                        />
                                        {err.password && <span className="form-text text-danger">{err.password}</span>}
                                        <div className="form-control-feedback">
                                            <i className="icon-lock2 text-muted"/>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <div className="uniform-checker">
                                                    <input type="checkbox" className="form-check-input-styled"
                                                           name="remember"
                                                           checked={fd.remember}
                                                           onChange={e => this.onInputChange(e.target.name, e.target.checked)}
                                                    />
                                                    <span />
                                                </div>
                                                Запам'ятати
                                            </label>
                                        </div>
                                        <Link to="/password-recovery">Забули пароль?</Link>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Увійти <i className="icon-circle-right2 ml-2"/>
                                        </button>
                                    </div>
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
        login(this.state.fd, err => {
            const state = {...this.state};
            for(let k in err) state.err[k] = err[k];
            this.setState(state);
        });
    }
}

export default LoginPage;
