require('./src/scss/style.scss')
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import { showDevTools } from './src/utils/dev-tools'
import DepositPage from './src/container/pages/depositPage'
import App from './src/App'

const store = configureStore()

render(
  <div>
    <Provider store={store}>
			<App />
		</Provider>
    {showDevTools(store)}
  </div>,
  document.getElementById('root')
)