import React from 'react'
import { Route } from 'react-router';

import NavBar from './components/NavBar'
import Home from './components/Home'
import Videos from './components/Videos'
import Me from './components/Me'
import Contact from './components/Contact'
import BehindTheScenes from './components/BehindTheScenes'

function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/videos'>
        <Videos/>
      </Route>
      <Route exact path='/me'>
        <Me/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
      <Route exact path='/behindthescenes'>
        <BehindTheScenes/>
      </Route>
    </div>
  );
}

export default App;