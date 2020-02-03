import React, { Component } from 'react';
import {BookItem, ToReadList} from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import axios from 'axios'

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      things: []
    }

    this.createThingHandler = this.createThingHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  
  async componentMount(){
    const response = await axios.get('/data/books.json');

    this.setState({
      things : response.data
    })
  }
	createThingHandler(thing){
    thing.id = Math.floor(Math.random * 1000);
    
    this.setState({
      things: this.state.things.concat(thing)
    })
  }

deleteHandler(things){
  const newBook = this.state.things.filter(thing => thing.id !== things.id);

  this.setState({
    things : newBook
  })
}

  render(){
    return(
      <div className = "App" >
      <Header thing-count={0}/>
        <BookItem things={[]} onCreated={this.createThing} onDelete={this.deleteHandler} />
        <ToReadList onSubmit= {this.changeHandler}/>
        <Footer />
      </div>
    );
  }
}



export default App;
