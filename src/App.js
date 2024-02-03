import React from 'react';
import AppDrawer from './componets/appDrawer';
import {BrowserRouter as Router, Route , Link, Routes} from 'react-router-dom'
import Home from './componets/Home';
import ClippedDrawer from './componets/clippedDrawer';


function App() {
  return (

      <Router basename="/App-Drawer">
        <Link to='/'></Link>
        <Routes>
        <Route path='/' exact element={<Home/>}></Route>
          <Route path='/appDrawer' exact element={<AppDrawer/>}></Route>
          <Route path='/clippedDrawer' exact element={<ClippedDrawer/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
