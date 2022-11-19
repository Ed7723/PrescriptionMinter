import React, { Component } from 'react'
import "./index.css"
import Navbar from './Nav/navbar'
import Inputform from './inputform'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Inputform />
      </div>
    )
  }
}

export default App