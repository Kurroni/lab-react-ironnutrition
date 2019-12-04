import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false
    }
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  addFood = (foodObj) => {
    const newFoods = [ foodObj, ...this.state.foods];
    console.log('neeewwwwwwwfffoods',newFoods);
    
    this.setState({
      foods: newFoods
    });
    console.log(this.state.foods);
  }

  
  render() {
    return (
      
      <div className="App">
      
      <button onClick={this.toggleForm}>Add food</button>
      <div>
      {this.state.showForm ?
      <AddFood addOneFood={this.addFood}/>
      :
      null}
      </div>
      { 
        this.state.foods.map( (food, index) => {
        return <FoodBox key={index} {...food}/>
        })
      }
      </div>
    )
  };
}

export default App;
