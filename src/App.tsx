import { ThemeProvider } from 'styled-components'
import React from 'react'

import GlobalStyle from './styles/Global'
import Modal from './components/Modal'
import theme from './styles/Theme'
import AppRouter from './router'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppRouter />
    <Modal />
  </ThemeProvider>
)

export default App
