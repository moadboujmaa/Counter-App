import React, { Component } from "react";
import Valeur from "./valeur";

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {counter: 0, steps_plus: 1, steps_minus: 1};
        this.increment = this.increment.bind(this);
        this.init = this.init.bind(this);
        this.decrement = this.decrement.bind(this);

        //* Increment functions
        this.plus_one = this.plus_one.bind(this);
        this.plus_two = this.plus_two.bind(this);
        this.plus_three = this.plus_three.bind(this);
        this.plus_four = this.plus_four.bind(this);

        //* Decrement functions
        this.minus_one = this.minus_one.bind(this);
        this.minus_two = this.minus_two.bind(this);
        this.minus_three = this.minus_three.bind(this);
        this.minus_four = this.minus_four.bind(this);
    }

    //* Action Buttons Functions
    decrement() {
        this.setState({counter: this.state.counter-this.state.steps_minus})
    }
    increment() {
        this.setState({counter: this.state.counter+this.state.steps_plus})
    }
    init() {
        this.setState({counter: 0})
    }

    //* Choosing Increment Steps
    plus_one () {
        this.setState({
            steps_plus: 1
        })
    }
    plus_two () {
        this.setState({
            steps_plus: 2
        })
    }
    plus_three () {
        this.setState({
            steps_plus: 3
        })
    }
    plus_four () {
        this.setState({
            steps_plus: 4
        })
    }

    //* Choosing Decrement Steps
    minus_one () {
        this.setState({
            steps_minus: 1
        })
    }
    minus_two () {
        this.setState({
            steps_minus: 2
        })
    }
    minus_three () {
        this.setState({
            steps_minus: 3
        })
    }
    minus_four () {
        this.setState({
            steps_minus: 4
        })
    }

    render() {
        return (
            <div className="container">
                <Valeur valeur={this.state.counter < 0 ? <span className="red">{this.state.counter}</span> : <span className="green">{this.state.counter}</span>}/>
                {/* Action Buttons */}
                <div className="action-btns">
                    <button onClick={this.decrement} className="btn">-</button>
                    <button onClick={this.init} className="init">Initialiser</button>
                    <button onClick={this.increment} className="btn">+</button>
                </div>

                {/* Increment Buttons */}
                <h2 className="increment_title">Increment Step: {this.state.steps_plus}</h2>
                <div className="increment">
                    <button onClick={this.plus_one}>+1</button>
                    <button onClick={this.plus_two}>+2</button>
                    <button onClick={this.plus_three}>+3</button>
                    <button onClick={this.plus_four}>+4</button>
                </div>

                {/* Decrement Buttons */}
                <h2 className="decrement_title">Decrement Step: -{this.state.steps_minus}</h2>
                <div className="decrement">
                    <button onClick={this.minus_one}>-1</button>
                    <button onClick={this.minus_two}>-2</button>
                    <button onClick={this.minus_three}>-3</button>
                    <button onClick={this.minus_four}>-4</button>
                </div>
                <div className="decrement-step"></div>
            </div>
        )
    } 
}