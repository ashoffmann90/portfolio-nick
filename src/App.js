import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components'

import AnotherFlight from './assets/fonts/Another Flight.otf'
import Basicaline from './assets/fonts/Basicaline-NonCommercial.otf'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Videos from './components/Videos'
import Contact from './components/Contact'
import BehindTheScenes from './components/BehindTheScenes'

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: 'Another Flight';
  src: local('Another Flight'), local('AnotherFlight'), url('${AnotherFlight}') format('opentype');
}
@font-face{
  font-family: 'Basicaline';
  src: local('Basicaline-NonCommercial'), local('Basicaline NonCommercial'), local('Basicaline-Non Commercial'), url('${Basicaline}') format('opentype')
}

p, li{
  font-family: @header-font;
}

h1, h2{
  font-family: @header-font;
}

a{
  font-family: @text-font;
}
`


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
      <NavBar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/videos'>
        <Videos/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
      <Route exact path='/behindthescenes'>
        <BehindTheScenes/>
      </Route>
      </Router>
    </div>
  );
}

export default App;