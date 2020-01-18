import React from 'react'
import ContactsInfoHeader from '../Components/ContactsInfoHeader.js'
import USerTable from '../Components/UserTable.js'
import Header from '../Components/Header.js'





export default class UsersPage2 extends React.Component {
    render(){
        return(
            <div style={{backgroundColor:'#edf2f7', display:"flex", flexDirection:"column"}}>
                   
                         <Header/>
                   
                      
                     
                       <USerTable/>
                     
                     
            </div>
           
        )
    }
}
