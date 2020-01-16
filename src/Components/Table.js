import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
import React from 'react'
import '../Pages/Main.css'

const columns = [
  {
    title: 'Tarihi',
    dataIndex: 'tarihi',
    key: 'tarihi',
  },
  {
    title: 'Musteri adi',
    dataIndex: 'musteri',
    key: 'musteri',
    width: 150,
  },
  {
    title: 'is detayi',
    dataIndex: 'Detayi',
    key: 'Detayi',
    width: 240,
  },
  {
    title: 'Kullanici',
    dataIndex: 'kullanici',
    key: 'kullanici',
   
  },
  {
    title: 'No.',
    dataIndex: 'no',
    key: 'no',
   
  
  },
  {
    title: 'Durum',
    dataIndex: 'durum',
    key: 'durum',

  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  
  },
  {
    title: 'Oncelik',
    dataIndex: 'oncelik',
    key: 'oncelik',
   
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',

  },
  {
    title: 'Garanti',
    dataIndex: 'garanti',
    key: 'garanti',
    width:100
  },
  {
    title: 'Islemler',
    dataIndex: 'islemler',
    key: 'islemler',
    width:100
 
  },



 
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    tarihi: '15/01/2020 12:17',
    musteri: `Sohrab Bicycles`,
    Detayi: `New Job for sohrab`,
    kullanici: `User Account`,
    no: "2c76d",
    durum: "Acik",
    product : "Kombi",
    oncelik : "Normal",
    brand : "Siemens",
    garanti : "Yok",
    islemler: ":"




  });
}


const pagination = { position: 'bottom' };

export default class MyTable extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    title: undefined,
    rowSelection: {},
    hasData: true,
    tableLayout: undefined,
    
  };

 

  handleDataChange = hasData => {
    this.setState({ hasData });
  };

  handlePaginationChange = e => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  };

  render() {
    const { state } = this;
    return (
      <div className="bg-gray-200 p-1 min-h-100vh">
          <div className="bg-white shadow p-1">
        
          <Table
            {...this.state}
            columns={columns.map(item => ({ ...item, ellipsis : true }))}
            dataSource={state.hasData ? data : null}
            scroll={{ x: 1500 }} 
          />
          </div>
      </div>
      
    );
  }
}
