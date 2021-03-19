import React, { Component } from 'react'
import './ClearButton.css'

export class ClearButton extends Component {
    render() {
        return (
            <button className='clearButton' onClick={() => this.props.handleClearClick()}>
                {this.props.children}
            </button>
        )
    }
}

export default ClearButton
