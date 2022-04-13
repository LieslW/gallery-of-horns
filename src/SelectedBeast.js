import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.hideModal}
                >
                    <Modal.Header closeButton>
                        <p>{this.props.title}</p>
                        {/* {this.state.title} */}
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            className="modalImage"
                            src={this.props.image_url}
                            alt={this.props.description}
                        />
                        <p>
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
