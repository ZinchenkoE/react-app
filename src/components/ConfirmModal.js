import React, { Component } from "react";

class UserModal extends Component {
    render() {
        return (
            <div className="modal fade show">
                <div className="modal-dialog">
                    <form autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Видалити користувача?</h5>
                                <button type="button" className="close"
                                        onClick={() => this.props.onCloseModal()}
                                >×</button>
                            </div>
                            <div className="modal-body">
                                Ви впевнені, що хочете видалити "{this.props.item.firstname} {this.props.item.lastname}"?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-link legitRipple"
                                        onClick={() => this.props.onCloseModal()}
                                >Відміна</button>
                                <button className="btn bg-primary legitRipple">Видалити</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.props.item);
        this.props.onCloseModal();
    }
}

export default UserModal;
