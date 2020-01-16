import React from 'react';
import '../App.css';
import Header from '../Components/Header.js'
import MyTable from '../Components/Table.js'
import FilterSection from '../Components/FIltersSection';

function Main() {
  return (
    
      <div> 
             <Header/>
            <FilterSection/>
            <MyTable/>
      </div>
    
   
  );
}

export default Main;
