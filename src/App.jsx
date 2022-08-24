import React from 'react';
import { Provider } from 'react-redux'
import  store from './store'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Gallery from './pages/Gallery/Gallery';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/details" exact element={<Details />} />
          <Route path="/gallery" exact element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </Provider>


  )

}

export default App;
