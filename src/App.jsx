import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickButton } from './actions'

import './App.css';

class App extends Component {

  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  /**
   * index.js:1375 Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
   * to resolve it, is necessary configure onChange handler.
   */
  render() {
    
    const { clickButton, newValue } = this.props
    const { inputValue } = this.state

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input 
          type='text'
          value={inputValue} 
          onChange={this.inputChange}
        />
        <button
          onClick={() => clickButton(inputValue)}
        >
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

/**
 * O método mapStateToProps transforma um trecho do estado da Store em uma prop 
 * utilizável pelo componente, com o nome newValue.} store 
 */
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
})

/**
 * 
 * Criamos o método mapDispatchToProps para converter a Action Creator clickButton 
 * que criamos no arquivo src/actions/index.js em uma prop para o componente.
 */
const mapDispatchToProps = dispatch => 
  bindActionCreators({ clickButton }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (App)
