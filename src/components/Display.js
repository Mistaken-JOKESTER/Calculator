import React, { Component } from 'react'
import './Display.css'

export class Display extends Component {
    render() {
        return (
            <div className='display'>
                <div className='operator'>
                    {this.props.operation}
                </div>
                <div className='number'>
                    {this.props.value}
                </div>
            </div>
        )
    }
}

export default Display
