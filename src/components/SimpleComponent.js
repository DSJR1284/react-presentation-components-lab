// Code SimpleComponent Here

import React, { Component } from 'react'

 class SimpleComponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
            mood: 'happy'
        }
    }


    // handleClick = () => {
    //     this.setState(prevState => ({
    //         mood: !prevState.mood
    //     }))
    // }

    handleClick = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
    }

    render() {
        return (
            // <div onClick={this.handleClick}>{this.state.mood ? 'happy' : 'sad'}
                <div onClick={this.handleClick}>{this.state.mood}</div> 
            // </div>
        )
    }
}

export default SimpleComponent;

