import React from 'react';
import './Main.css';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
    render() {
        console.log(this.props.data);
        let beastArr = [];
        this.props.data.map((beast, index) => {
            return beastArr.push(
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
                <main>
                    <Container>
                        <Row className="mx-1" xs ={1} sm ={2} md={3} lg={4}>
                            {beastArr}
                        </Row>
                    </Container>
                </main>
            </>
        )
    }
}

export default Main;
