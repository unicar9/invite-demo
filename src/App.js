import React, { Component } from 'react'
import InviteModal from './components/Modal'
import './App.css'
import InviteForm from './components/InviteForm'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="navbar">
          <InviteModal>
            <InviteForm />
          </InviteModal>
        </div>
      </div>
    )
  }
}

export default App
