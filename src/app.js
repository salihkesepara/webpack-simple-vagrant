require('./scss/style.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import DepositPage from './container/pages/depositPage'

ReactDOM.render(
  <DepositPage name="World" />,
  document.body
)

console.log('app loaded')