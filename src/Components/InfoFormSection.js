import { Tabs, Card, Button, Icon , Dropdown, Menu, Descriptions} from 'antd';
import React from 'react'
import '../Pages/CustomerInfo.css'
import Text from 'antd/lib/typography/Text';


export default class InfoTabsScreen extends React.Component {
    render(){
        function handleMenuClick(e) {
            console.log('click', e);
          }
          
        const menu = (
            <Menu onClick={handleMenuClick}>
              <Menu.Item key="1">1st item</Menu.Item>
              <Menu.Item key="2">2nd item</Menu.Item>
              <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
          );


        return(
            <div className="shadow s-form" >

                <div className="s-form-btn">

                <div className="form-btn">
                    <Button ghost={true}>
                        <Icon  style={{color:"dodgerblue"}} type="left" />
                        <Text style={{color:"dodgerblue"}}>Back</Text>
                            
                    
                    </Button>
                </div>
                <Dropdown overlay={menu}>
                    <Button>
                        Actions <Icon type="down" />
                    </Button>
                </Dropdown>



                </div>


                <div className="form-texts">
                
                    <p className="form-text1">Google incorporation Pvt Ltd</p>
                    <p>Gulshab-e-Iqbal, karachi, Karachi City, Sindh Pakistan</p>
                </div>



                <div>


                    <div className="form-user-info-div">
                        <p style={{margin:1 ,fontSize:12.5}}>Contact person</p>
                        <p className="form-user-info">Ahme Vekil</p>
                    </div>
                    <div className="form-user-info-div">
                        <p style={{margin:1 ,fontSize:12.5}}>Telephone</p>
                        <p className="form-user-info">+90 637 660 9875</p>
                    </div>
                    <div className="form-user-info-div">
                        <p style={{margin:1 ,fontSize:12.5}}>Email</p>
                        <p className="form-user-info">mehmet@teleskop.co</p>
                    </div>
                    <div className="form-user-info-div">
                        <p style={{margin:1 ,fontSize:12.5}}>Business Sector</p>
                        <p className="form-user-info">Service</p>
                    </div>

    
{/*                     
                    <div className="form-user-info">
                        <p>Contact person</p>
                            <Card style={{ width: 150 }} >
                            <p>Ahme vekil</p>
                        
                        </Card>
                    </div>
                     */}





                </div>

                
                
            </div>
            
        )
    }
}

