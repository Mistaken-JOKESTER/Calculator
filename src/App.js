import React, { Component } from 'react'
import './App.css'
import ButtonPannel from './components/ButtonPannel'
import Display from './components/Display'
import { registerButton } from './functions/registerButton'

export const ClickHandler = React.createContext()

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       first_number: null,
       second_number: null,
       operator:null,
       result:null,
       error:null
    }
  }

  clickHandler = (buttoName) => {
    this.setState(registerButton(buttoName, this.state), () => console.table(this.state))
  }
  

  render() {
    const {error, second_number, first_number, operator} = this.state
    return (
      <div className='app'>
        <Display value={error || second_number || first_number || '0'} operation={operator||'--'} />
        <ClickHandler.Provider value ={this.clickHandler}>
          <ButtonPannel/>
        </ClickHandler.Provider>
      </div>
    )
  }
}

export default App
