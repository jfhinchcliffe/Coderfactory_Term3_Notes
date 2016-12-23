//import React, { Component } from 'react';
// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'whatwg-fetch'; // Polyfills window.fetch
import Counter from './components/Counter';
import fetchAPI from './api/fetchAPI';
import replaceItemWithID from './utils/replaceItemWithId';

class App extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      counters: [],
    }; 
    fetchAPI('/counters')
      .then(counters => {
        console.log('counters', counters);
        this.setState({
          counters: counters
        })
      })
      .catch(error => {
        console.error('Error loading counter API', error.message)
      }) 
  }
  
  onChangeCount(id, change) {
    fetchAPI(`/counters/${ id }`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        change: change,
      })
    })
      .then(newCounter => {
        this.setState(({ counters }) => ({
          counters: replaceItemWithID(counters, id, newCounter)
        }))
      })
  }
  
  render() {
    const {counters} = this.state;
    return (
      <main className="app">
      {
        counters.map((counter, index) => {
          return (
             <Counter 
              key={ index }
              count={ counter.count }
              onIncrement={ this.onChangeCount.bind(this, counter._id, 1 )}
              onDecrement={ this.onChangeCount.bind(this, counter._id,  -1 )}
            />
          )
        })
      }
       
      </main>
   );
  }
  
}
 export default App;