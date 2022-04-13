import React from 'react';
import './Main.css';
import HornedBeast from './HornedBeast';


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
                />

            )
        })

        return (
            <>
                <main>
                    {beastArr}
                </main>
            </>
        )
    }
}

export default Main;
