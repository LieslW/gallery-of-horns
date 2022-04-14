import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.hideModal}
                >
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        <img
                            className="modalImage"
                            src={this.props.image_url}
                            alt={this.props.description}
                        />
                        <p className="modal-title">
                            {this.props.title}
                        </p>
                        <p>
                            {this.props.description}
                        </p>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;
