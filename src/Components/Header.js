import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';
import React from 'react'
import slogo from '../assets/SapiyonLogo.png';
import '../Pages/Main.css'


const { SubMenu } = Menu;

const { Paragraph } = Typography;





// const menu = (
//     <Menu>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
//           1st menu item
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
//           2nd menu item
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
//           3rd menu item
//         </a>
//       </Menu.Item>
//     </Menu>
//   );


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








export default class Header extends React.Component {

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
              backgroundColor: "#33475b",
              paddingLeft:1,
              // display: "flex",
              // justifyContent:"space-between"
              
            }}



      
            extra={[
            <div   className="sheader-style">
           
                 <img className="logo-header" src={slogo} alt="Logo" />
              
            
               
           

              
             
              
              {/* <div className="flex-1 hidden sm:block "></div> */}

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
          <div style={{}}>
                  <a className="text-style-2x1 white-color" key="+"><Icon type="plus-circle" theme="filled" /></a>
                  
                  <Dropdown className="ml-1" overlay={dropMenuStock} overlayStyle={{background:"#000"}}>
                    <Button className="stock-btn ml-1" >
                      <Icon style={{}} type="appstore" theme="filled" /> 
                    </Button>
                  </Dropdown>
                  
                  
                  <Dropdown className="ml-1" overlay={dropMenuProfile} overlayStyle={{backgroundColor:"red"}}>
                    <Button className="user-btn-bg" >
                        <Icon style={{color:"white"}}  type="user" />
                    </Button>
                  </Dropdown>
                
                    
              
                  
                
                      <a className="white-color ml-1 mt--2" key="androd"><Icon type="android" theme="filled" /></a>,
                  
              </div>
       
          </div>
            ]}

            >
          </PageHeader>


        )
    }
}

