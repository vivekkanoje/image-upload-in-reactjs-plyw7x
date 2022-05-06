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
      message: null,
      menu: []
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

  getMenu = () => {
    fetch(BASE_URL + '/Menu')
      .then(res => res.json())
      .then(menu => {
        console.log('getMenu', menu);
        this.setState({
          menu
        })
      })
  }

  render() {
    const { imageUrl, imageUrlLocal, message, menu } = this.state;

    return (
      <>
        <div className="App">
          
  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                  menu.map(m => (
                  <>   
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {m.text}
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {m.childItem.map(c => (
                            <>
                              <li><a className="dropdown-item" href={c.url}>{c.text}</a></li>
                              <li><hr className="dropdown-divider" /></li>
                            </>
                          ))}
                      </ul>
                    </li>
                  </>
                  ))
                }
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          
          <button onClick={this.getImage} >Get Image</button>
          <button onClick={this.addImage} >Add Image</button>
          <button onClick={this.ubdateImage} >Put Image</button>
          <button onClick={this.deleteImage} >Delete Image</button>
          <button onClick={this.getMenu} >Load Menu</button>
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
