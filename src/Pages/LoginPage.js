import React from 'react';
import '../App.css';
import slogo from '../assets/SapiyonLogo.png';
import WrappedNormalLoginForm from '../Components/LoginForm.js';



function LoginPage() {
  return (
    <div className="LoginPage">
      <div style={{margin:"auto"}}>
            <img className="logo" src={slogo} alt="Logo" />
            <div className = "form Style-bg-gray Style-shadow Border">
            <h1 className="Login-head">Giriş Yap</h1>
            <WrappedNormalLoginForm/>
          </div>
      </div>
      
    </div>
   
  );
}

export default LoginPage;
