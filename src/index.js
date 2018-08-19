import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import './index.css'
import App from './App'

import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
