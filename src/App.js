import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Footer from './Footer';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: '',
      image_url: 'Hello, Beasties',
      description: 'There are no happy endings because nothing  ends',
      showModal: false,
    };
  };

  addUnicorns = () => {
    this.setState({
      unicorns: this.state.unicorns + '🦄'
    });
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  openModal = (image_url, description) => {
    this.setState ({
      showModal: true,
      image_url: image_url,
      description: description,
    })
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
          openModal={this.openModal}
        />
        <SelectedBeast 
          hideModal={this.hideModal}
          showModal={this.state.showModal}
          image_url={this.state.image_url}
          description={this.state.description}
        />
        <Footer />
      </>
    )
  }

}

export default App;
