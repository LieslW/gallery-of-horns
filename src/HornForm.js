import React from 'react';
import Form from 'react-bootstrap/Form';
import './HornForm.css';

class HornForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleBeasties = (e) => {
        this.props.handleFilter(parseInt(e.target.value))
    }

    render() {
        return (
            <>
                <Form.Group className="sortment">
                    <Form.Label>Sort Me!</Form.Label>
                    <Form.Select onChange={this.handleBeasties}>
                        <option value="{'data' : ['1', '2', '3', '100']}">Everyone</option>
                        <option value='1'>Single Horn</option>
                        <option value='2'>Double Horns</option>
                        <option value='3'>Triple Horns</option>
                        <option value='100'>All the Horns!</option>
                    </Form.Select>
                </Form.Group>
            </>
        )
    }
}

export default HornForm;
