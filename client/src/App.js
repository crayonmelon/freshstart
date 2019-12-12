import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation.js';
import Items from './components/Items.js';
import AddItem from './components/AddItem.js';
import About from './components/pages/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Unity, { UnityContent } from "react-unity-webgl";
import axios from 'axios';


const bodyStyle = {
  backgroundImage: `url(${'https://background-tiles.com/overview/red/patterns/large/1056.png'})`,
  height: '100%'
}

document.body.style = 'background-image: url("https://background-tiles.com/overview/red/patterns/large/1056.png");';

class App extends Component{

  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "./MyGame/Build/Phase3.json",
      "./MyGame/Build/UnityLoader.js"
    );
  }

  state = {
    items: []
  }

componentDidMount(){
    fetch('/api/items')
    .then(res => res.json())
    .then(items => this.setState({items}, () => console.log('items are fetched..', items)))
}

  
  markComplete = (_id) => {
    this.setState({items: this.state.items.map(item => {
      if(item._id === _id){
        item.liked = !item.liked
      }
      return item;
    })})
    
    this.setState({
      items: this.state.items
     })
  }
  


showAll = (e)=> {
  this.setState({
    items: this.state.items
  })
}

showLikes = (e) => {
  const newItems = this.state.items.filter(function(newitem){
    return newitem.liked === true;
  });
  this.setState({
    items: newItems
  })
}

AddItem = (title, author ,content) => {
  axios.post('/api/items', {title:title+"", author:author+"", content:content+""})
  .then(resp => resp.data)
  .catch(err => {
    console.error(err);
  });
}

delItem = (_id) => {

  console.log(_id)
  axios.delete(`api/items/${_id}`)

}

render(){
  return (
      
    <div className="App" style={bodyStyle} 
    >
      <Router>
        <Navigation handleShowLikes={this.showLikes} handleShowAll={this.showAll}/>
        <Header/>
        <div className="container">
          <Route exact path="/" render={props => (
            <React.Fragment>
              
              <AddItem AddItem={this.AddItem}/>
              <Items items={this.state.items} 
              markComplete={this.markComplete} 
              delItem ={this.delItem} />
            </React.Fragment> 
          )}  />
          <Route path="/about" component = {About}/>
          <React.Fragment>
          </React.Fragment> 
          <Route path="/Game" render={props => (
            <Unity unityContent={this.unityContent} />
          )} />
          
        </div>
      </Router>
    </div>
    ); 
  }
};

export default App;