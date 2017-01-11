import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DepositPage from './container/pages/depositPage'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <DepositPage name="World" />
    )
  }
}

export default App