import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage.js';
import Main from './Pages/Main.js'
import CustomerInfo from './Pages/CustomerInfo';
import UsersPage from './Pages/UsersPage';
// import AppContainer from './Pages/AppNavigator.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import UsersPage2 from './Pages/UsersPage2';

export default class App extends React.Component{
  render(){
    return (
     
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage}/>  
            <Route path="/home" component={CustomerInfo}/>
            <Route path="/users2" component={UsersPage2}/>
          </Switch>
          
        
        </div>
        
        
   
    </Router>
    ) 
  }
}


