import React, {Component} from "react";

class UsersPage extends Component {
    constructor(props) {
        super(props);

        this.users = [
            {firstname: 'Евгений',  lastname: 'Зинченко', email: 'zinchenko.evgeniy@gmail.com'},
            {firstname: 'Виктория', lastname: 'Иванова',  email: 'vic.iva@gmail.com'},
            {firstname: 'Ольга',    lastname: 'Петровна', email: 'olga.pet@gmail.com'},
            {firstname: 'Василий',  lastname: 'Пупкин',   email: 'vas.pupkin@gmail.com'},
        ];
    }

    render() {
        return (
            <div className="content">
                <div className="card">
                    <div className="card-header header-elements-inline">
                        <h5 className="card-title">Користувачі</h5>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Ім'я</th>
                                <th>Прізвище</th>
                                <th>E-mail</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.users.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td className="text-right">
                                            <div className="list-icons">
                                                <a className="list-icons-item">
                                                    <i className="icon-pencil7" />
                                                </a>
                                                <a className="list-icons-item">
                                                    <i className="icon-trash" />
                                                </a>
                                                <a className="list-icons-item">
                                                    <i className="icon-cog6" />
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

export default UsersPage;
