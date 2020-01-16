import { Tabs, List, Table, Divider, Tag } from 'antd';
import React from 'react'
import '../Pages/CustomerInfo.css'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


const footer = () =>  <div style={{display:'flex', flexDirection:'row' ,justifyContent:"flex-start", fontWeight:"bold"}}>
    <p style={{marginRight:210}}>Total</p>
    <p>35000Tl</p>
     </div>;

export default class BillingTabScreen extends React.Component {
    state = {
        footer,
    }

    render(){




const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Paid through',
        dataIndex: 'paid',
        key: 'paid',
      },
    
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <span>
          <a style={{paddingLeft:10}}>...</a>
        
        </span>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      date: '15/02/2020',
      amount: '550 TL',
      description: 'Yearly + 25 users',
      status: "Paid",
      paid: "Credit Card"
    },
    {
        key: '2',
        date: '15/02/2020',
        amount: '650 TL',
        description: 'Monthly + 25 users',
        status: "Due",
        paid: "Bank TT"
      },
      {
        key: '3',
        date: '15/02/2020',
        amount: '550 TL',
        description: 'Yearly + 25 users',
        status: "Paid",
        paid: "Credit Card"
      },
      {
        key: '4',
        date: '15/02/2020',
        amount: '650 TL',
        description: 'Monthly + 25 users',
        status: "Due",
        paid: "Bank TT"
      },
    //   {
    //     key: '5',
    //     date: 'Total',
    //     amount: '35000 TL',
       
    //   },
    
  ];
  
          
           













            

            
            
      
    
      
        return(
            <Table columns={columns} dataSource={data}  footer={this.state.footer} pagination={false}/>
        )
    }
}
