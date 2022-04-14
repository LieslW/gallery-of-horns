import React from 'react';
import './Main.css';
import HornForm from './HornForm';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beasties: this.props.data,
            horns: 0,
        }
    }

    handleFilter = (value) => {
        let newSet = this.props.data.filter(beast => beast.horns === value)
        this.setState({
            beasties: newSet
        })
    }

    render() {
        console.log(this.props.data);
        let beasts = this.state.beasties.map((beast, index) => {
            return (
                <HornedBeast
                    _id={beast._id}
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    keyword={beast.keyword}
                    horns={beast.horns}
                    key={index}
                    addUnicorns={this.props.addUnicorns}
                    openModal={this.props.openModal}
                />

            )
        })

        return (
            <>
                <HornForm
                    handleFilter={this.handleFilter}
                />
                <main>
                    <Container>
                        <Row className="mx-1" xs ={1} sm ={2} md={3} lg={4}>
                            {beasts}
                        </Row>
                    </Container>
                </main>
            </>
        )
    }
}

export default Main;
