import React from 'react';
import './assets/css/base/base.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Pages
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Page404 from './paginas/Page404'
import Post from './paginas/Post'

// Components
import Header from './components/Header'
function App() {

  return (
  <>

  <Router>
  <Header/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/Sobre'>
        <Sobre/>
      </Route>
      <Route path='/posts/:id'>
        <Post/>
      </Route>
      
      <Route>
        <Page404/>
      </Route>

    </Switch>
  </Router>

  </>
  )
}

export default App
