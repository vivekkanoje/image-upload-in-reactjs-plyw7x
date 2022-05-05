import React, { Component } from 'react';
import axios from 'axios';

// base url of API
const BASE_URL = window.location.origin;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null, 
      imageUrlLocal: null, 
      message: null
    };
  }

  getImage = () => {
    console.log('1 getImage');
    axios
      .get(BASE_URL + '/data.json')
      .then((response) => {
        console.log('2 getImage', response);
        this.setState({
          imageUrl: response.data.imageUrl,
          imageUrlLocal: response.data.imageUrlLocal,
          message: response.data.message
        });
        console.log('3 state', this.state);
 
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    const { imageUrl, imageUrlLocal, message } = this.state;
    return (
      <>
        <div className="App">
         
          <button onClick={this.getImage} >Get Image</button>
          {
            message && (
              <p>{message}</p>
            )
          }
          {imageUrl && (
            <img src={imageUrl} height="100" width="100" />
          )}
          {imageUrlLocal && (
            <img src={imageUrlLocal} height="100" width="100" />
          )}
        </div>
       
      </>
    );
  }
}

export default App;
