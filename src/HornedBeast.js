import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import './HornedBeast.css';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0,
        }
    }

    handleFavorites = () => {
        this.setState({
            favorites: this.state.favorites + 1
        });
    };

    render() {
        return (
            <Card>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Img
                    src={this.props.image_url}
                    alt={this.props.description}
                    title={this.props.title}
                    onClick={this.handleFavorites}
                />
                <Card.Body>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="beast-horns">
                    <ListGroup.Item>Number of Horns: {this.props.horns}</ListGroup.Item>
                    <ListGroup.Item onClick={this.handleFavorites}>{this.state.favorites} ❤️ Favorites</ListGroup.Item>
                </ListGroup>
            </Card>


            // <>
            //     <article>
            //         <h2>{this.props.title}</h2>
            //         <img
            //             src={this.props.image_url}
            //             alt={this.props.description}
            //             title={this.props.title}
            //             onClick={this.handleFavorites}
            //         />
            //         <p>{this.props.description}</p>
            //         <p>{this.state.favorites} ❤️ favorites</p>
            //     </article>
            // </>
        )
    }
}

export default HornedBeast;
