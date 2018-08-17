import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import rootReducer from './reducers/rootReducer'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'

// const store = createStore(rootReducer)

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
