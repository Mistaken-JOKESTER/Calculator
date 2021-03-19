import React, { Component } from 'react'
import { ClickHandler } from '../App'
import styles from './Button.module.css'

export class Button extends Component {
    render() {
        return (
            <ClickHandler.Consumer>
                { 
                    handler =>
                        <button 
                            className={`${styles.button} ${this.props.color?styles.color:null} ${this.props.wide?styles.wide:null}`}
                            onClick={() => handler(this.props.name)}
                        >
                            {this.props.name}
                        </button>
                    
                }
            </ClickHandler.Consumer>
            
        )
    }
}

export default Button
