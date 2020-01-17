import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage.js';
import Main from './Pages/Main.js'
import CustomerInfo from './Pages/CustomerInfo';
import UsersPage from './Pages/UsersPage';
// import AppContainer from './Pages/AppNavigator.js';
import {
  HashRouter,

  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return (
     
      <BrowserRouter>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={CustomerInfo} />
        
        </div>
        
        
   
    </BrowserRouter>
    ) 
  }
}


