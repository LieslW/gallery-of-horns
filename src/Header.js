import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h1 onClick={this.props.addUnicorns}>
                        {this.props.unicorns}
                        Gallery of Horns
                        {this.props.unicorns}
                    </h1>
                </header>
            </>
        )
    }
}

export default Header;
