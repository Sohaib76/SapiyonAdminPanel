import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';
import React from 'react'
import slogo from '../assets/SapiyonLogo.png';
import '../Pages/Main.css'






const dropMenuStock = (
  <Menu>
  <Menu.Item key="fund">
  <Icon type="fund" />
        Stoklar
      </Menu.Item>
  <Menu.Item key="user">
  <Icon type="user" />
    Musteriler
  </Menu.Item>
  <Menu.Item key="idcard">
    <Icon type="idcard" />
  
    Kullaniciler
  </Menu.Item>
  </Menu>
);
const dropMenuProfile = (
  <Menu>
       
       <Menu.Item>
        <Icon type="profile" />
              User
            </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="setting">
        <Icon type="setting" />
          Ayarlar
        </Menu.Item>
        <Menu.Item key="logout">
        <Icon type="logout" />
        
        Cikisyap
        </Menu.Item>
  
</Menu>

)








export default class ContactsInfoHeader extends React.Component {

    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    



    render(){
        return(
            <PageHeader
            // title="Title"
            style={{
              border: '1px solid rgb(235, 237, 240)',
              backgroundColor: "#33475b"
            }}

      
            extra={[
              <div   className="sheader-style">
              <img className="logo-header" src={slogo} alt="Logo" />
              
              <div className="flex-1 hidden sm:block "></div>

            {/* //   <Menuu/>, */}
              
        <Menu 
        onClick={this.handleClick} theme={"dark"}
        selectedKeys={[this.state.current]} 
        mode="horizontal" style={{backgroundColor:'#33475b'}} 
        className="align-middle font-medium text-white liste-style">
          <Menu.Item key="unordered-list">
           <Icon type="unordered-list" />
            Liste
          </Menu.Item>
          <Menu.Item key="environment">
            <Icon type="environment" />
            Harita
          </Menu.Item>
          <Menu.Item key="alipay">
            <a  target="_blank" rel="noopener noreferrer">
            <Icon type="schedule" />
              Takvim
            </a>
          </Menu.Item>
          </Menu>
          <div className="flex-1 hidden sm:block"></div>
          <div style={{  display:'flex', justifyContent:'center',
         alignItems:'center'}}>
          <a className="text-style-2x1 white-color" key="+"><Icon 
          type="plus-circle" theme="filled" 
          // style={{marginTop:15 , paddingTop:10}}
          
          /></a>
          
          <Dropdown className="ml-1" overlay={dropMenuStock} overlayStyle={{background:"#000"}}>
            <Button className="stock-btn ml-1" >
              <Icon style={{}} type="appstore" theme="filled" /> 
            </Button>
          </Dropdown>
          
          
          <Dropdown className="ml-1" overlay={dropMenuProfile} overlayStyle={{backgroundColor:"red"}}>
            <Button className="logged-user-btn-bg" >
                {/* <Icon style={{color:"white"}}  type="user" /> */}
                <p style={{fontWeight:600}}>A</p>
            </Button>
          </Dropdown>
        
            
       
          
    
           
              </div>
       
          </div>
            ]}

            >
          </PageHeader>


        )
    }
}

