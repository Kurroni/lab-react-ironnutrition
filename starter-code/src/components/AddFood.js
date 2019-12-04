import React, { Component } from 'react'

class AddFood extends Component {
    state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
    }

    handleInput = (e) => {
        
        let { value, name } = e.target;
        
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addOneFood(this.state);
        console.log(this.state)
        this.setState({
        name: "",
        calories: 0,
        image: "",
        quantity: 0
        });
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input onChange={this.handleInput} type="text" name="name" value={this.state.name}/>
                    <label>Calories</label>
                    <input onChange={this.handleInput} type="number" name="calories" value={this.state.calories}/>
                    <label>Image</label>
                    <input onChange={this.handleInput} type="text" name="image" value={this.state.image}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddFood;