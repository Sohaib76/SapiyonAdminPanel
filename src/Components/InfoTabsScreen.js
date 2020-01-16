import { Tabs, List,  } from 'antd';
import React from 'react'
import '../Pages/CustomerInfo.css'
import BillingTabScreen from './BillingTabScreen';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}



export default class InfoTabsScreen extends React.Component {
    render(){



        const list = [
         {   
             "left":["Status"],
                
            
             "right": ["Active till 20 January 2020"]
        },
        {
            "left":["Days left to expire"],
                
            
            "right": ["60 days"]
        },
        {   
            "left":["Sign up date"],
               
           
            "right": ["20 January 2020"]
       },
       {
           "left":["Next billing date"],
               
           
           "right": ["20 January 2020"]
       },
       {   
        "left":["Status"],
           
       
        "right": ["Active till 20 January 2020"]
   },
   {
       "left":["Days left to expire"],
           
       
       "right": ["60 days"]
   },
   {
    "left":["Tax (18%)"],
        
    
    "right": ["50 TL"]
},
   {
    "left":["Total Amount Without Tax"],
           
       
    "right": ["800TL"]
   }





            
          
           
            

            
            
        ]
    
      
        return(
            <Tabs defaultActiveKey="1" onChange={callback} className="tabs-style shadow">





                <TabPane tab="General" key="general">
                <List
                        footer={<div className="s-footer">
                            <div>{list[7].left}</div>
                            <div>{list[7].right}</div>
                            
                        </div>}
                        className="demo-loadmore-list tabs-list"
                        
                        itemLayout="vertical"
                        
                        dataSource={list}
                        renderItem={(list,key) => (
                          
                        
                        <List.Item
                        extra={
                            key < 7  ?
                                    <div>{list.right}</div>
                                :      <div>40TL</div>                            
                            }

                        >
                            {
                            key < 7  ?
                                    <div> {list.left}</div>
                                : <div>Amount</div>
                            }
                           
                           
                       
                            
                           
                        </List.Item>
                        )}
                    />
                </TabPane>










                <TabPane tab="Account" key="account">
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Billing" key="billing">
                    <BillingTabScreen/>
                </TabPane>
            </Tabs>
        )
    }
}
