import React, {Component} from "react";
import {connect} from "react-redux";
import {getUsers, showUserConfirmModal, showUserModal} from "../actions";

class UsersPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getUsers();
    }

    render() {
        return (
            <div className="content">
                <div className="card">
                    <div className="card-header header-elements-inline">
                        <h5 className="card-title">Користувачі</h5>
                        <button className="btn btn-primary legitRipple" onClick={() => showUserModal({})}>Новий користувач</button>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Ім'я</th>
                                <th>Прізвище</th>
                                <th>E-mail</th>
                                <th />
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.users.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td className="text-right">
                                            <div className="list-icons">
                                                <a className="list-icons-item" onClick={() => showUserModal(item)}>
                                                    <i className="icon-pencil7" />
                                                </a>
                                                <a className="list-icons-item" onClick={() => showUserConfirmModal(item)}>
                                                    <i className="icon-trash" />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(UsersPage);
