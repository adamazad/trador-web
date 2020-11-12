import { Provider as StoreProvider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import store from './services/redux/store'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
