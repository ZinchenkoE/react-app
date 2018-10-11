import React, { Component } from "react";

class UserModal extends Component {
    constructor(props) {
        super(props);

        this.title = props.item ? 'Редагування користувача' : 'Створення користувача';

        this.state = {
            item: {
                id: Date.now(),
                firstname: '',
                lastname: '',
                email: '',

                ...props.item
            }
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <div className="modal fade show">
                <div className="modal-dialog">
                    <form autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.title}</h5>
                                <button type="button" className="close"  onClick={() => this.props.onCloseModal()}>×</button>
                            </div>

                            <div className="modal-body">
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">Ім'я</label>
                                    <div className="col-sm-9">
                                        <input name="firstname" placeholder="Ім'я" className="form-control"
                                               value={this.state.item.firstname} onChange={this.onInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">Прізвище</label>
                                    <div className="col-sm-9">
                                        <input name="lastname" placeholder="Прізвище" className="form-control"
                                               value={this.state.item.lastname} onChange={this.onInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">Email</label>
                                    <div className="col-sm-9">
                                        <input name="email" placeholder="Email" className="form-control"
                                               value={this.state.item.email} onChange={this.onInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-link legitRipple"
                                        onClick={() => this.props.onCloseModal()}
                                >Відміна</button>
                                <button className="btn bg-primary legitRipple">Зберегти</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    onInputChange(e) {
        const name = e.target.name;
        this.state.item[name] = e.target.value;
        this.setState({item: this.state.item});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.item);
        this.props.onCloseModal();
    }
}

export default UserModal;
