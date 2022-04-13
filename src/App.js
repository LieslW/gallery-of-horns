import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: '',
    };
  };

  addUnicorns = () => {
    this.setState({
      unicorns: this.state.unicorns + '🦄'
    });
  }

  render() {
    return (
      <>
        <Header
          unicorns={this.state.unicorns}
          addUnicorns={this.addUnicorns}
        />
        <Main
          data={data}
        />
        <Footer />
      </>
    )
  }

}

export default App;
