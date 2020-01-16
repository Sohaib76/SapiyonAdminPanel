import React from 'react'
import InfoTabsScreen from '../Components/InfoTabsScreen.js'
import ContactsInfoHeader from '../Components/ContactsInfoHeader.js'
import InfoFormsSection from '../Components/InfoFormSection.js'




export default class CustomerInfo extends React.Component {
    render(){
        return(
            <div>
                     <ContactsInfoHeader/>
                     <div className="main-screen-content">
                        <InfoFormsSection/>
                        <InfoTabsScreen/>
                     </div>
                     
            </div>
           
        )
    }
}
