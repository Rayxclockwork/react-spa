import React from 'react';
import {BookItem, ToReadList} from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      things: [
        {id: 1, name: 'Book'},
        {id: 2, name: 'Cup'}
      ]
    }

    this.createThingHandler = this.createThingHandler.bind(this);
	}
	createThingHandler(thing){
    thing.id = Math.floor(Math.random * 1000);
    
    this.setState({
      things: this.state.things.concat(thing)
    })
  }

//deleteHandler(thing)

  render(){
    return(
      <div className = "App" >
      <Header thing-count={0}/>
        <BookItem things={[]} onCreated={this.createThing}/>
        <ToReadList onSubmit= {this.changeHandler}/>
        <Footer />
      </div>
    );
  }
}



export default App;
