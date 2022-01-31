import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'
import configureStore from './redux/app/store'

const plantilla = createTheme({
  palette: {
    primary: {
      main: '#140d4fff'
    },
    secondary: {
      main: '#53acf1ff'
    },
    info: {
      main: '#f0f2f1ff'
    },
    success: {
      main: '#f58442ff'
    },
    error: {
      main: '#git a'
    }
  },

  typography: {
    fontFamily: [
      'Roboto',
      'open-sans'
    ].join(',')
  }
})

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={plantilla}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
