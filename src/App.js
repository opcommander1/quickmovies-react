import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Search from './components/Search'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Search />
          <Switch>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

