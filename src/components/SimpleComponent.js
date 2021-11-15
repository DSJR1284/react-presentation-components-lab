// Code SimpleComponent Here

import React, { Component } from 'react'

 class SimpleComponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
            mood: "happy"
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            mood: !prevState.mood
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood ? 'happy' : 'sad'}
            </div>
        )
    }
}

export default SimpleComponent;

