import React, { Component } from 'react';
import axios from 'axios';

// base url of API
const BASE_URL = 'http://localhost:3003';

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
    fetch(BASE_URL + '/App')
      .then(res => res.json())
      .then((data) => {
        console.log('2 getImage', data);
        this.setState({
          imageUrl: data[0].imageUrl,
          imageUrlLocal: data[0].imageUrlLocal,
          message: data[0].message
        });
        console.log('3 state', this.state);
 
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  addImage = () => {
    let imageUrl = "https://picsum.photos/800/800";
    let imageUrlLocal = "http://localhost:3001/img/image-ele.jpg";
    let message = "New Add image";
    let body = JSON.stringify({
      imageUrl, imageUrlLocal, message
    });
    console.log('addImage');
    fetch(BASE_URL + '/App', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8'},
      body: body 
    }).then();
  }

  ubdateImage = () => {
    let imageUrl = "https://picsum.photos/800/800";
    let imageUrlLocal = "http://localhost:3001/img/image-ele.jpg";
    let message = "New Put image";
    let body = JSON.stringify({
      imageUrl, imageUrlLocal, message
    });
    console.log('addImage');
    fetch(BASE_URL + '/App/3', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=UTF-8'},
      body: body 
    }).then();
  }

  deleteImage = () => {
    fetch(BASE_URL + '/App/3', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json; charset=UTF-8'},
    }).then();
  }

  render() {
    const { imageUrl, imageUrlLocal, message } = this.state;
    return (
      <>
        <div className="App">
         
          <button onClick={this.getImage} >Get Image</button>
          <button onClick={this.addImage} >Add Image</button>
          <button onClick={this.ubdateImage} >Put Image</button>
          <button onClick={this.deleteImage} >Delete Image</button>
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
