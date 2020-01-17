import React from 'react'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import '../Pages/UsersPage.css'
import '../App.css'

const data = [
  {
    key: '1',
    adsoyad: 'Test account',
    eposta: 'orbdaf@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '2',
    adsoyad: 'Test account',
    eposta: 'orbdaf@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '3',
    adsoyad: 'Test account',
    eposta: 'orbdaf@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '4',
    adsoyad: 'Test account',
    eposta: 'orbdaf@gmail.com',
    telefon: '102945832',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '5',
    adsoyad: 'Test account',
    eposta: 'awr@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '6',
    adsoyad: 'Test account',
    eposta: 'orbdaf@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '7',
    adsoyad: 'Test account',
    eposta: 'orbdaf@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '8',
    adsoyad: 'Test account',
    eposta: 'orbdaf@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },
  {
    key: '9',
    adsoyad: 'Test account',
    eposta: 'awr@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Test Role",
 
  },
  {
    key: '10',
    adsoyad: 'Test account',
    eposta: 'awr@gmail.com',
    telefon: '231546468',
    ekip : "",
    rol : "Manager",
 
  },


 
  
 
];






export default class USerTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
      };
    
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };
    
    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
              console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
              console.log(selected, selectedRows, changeRows);
            },
          };
          







        const columns = [
            {
              title: 'Ad Soyad',
              dataIndex: 'adsoyad',
              key: 'adsoyad',
              width: '20%',
              ...this.getColumnSearchProps('adsoyad'),
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.adsoyad.length - b.adsoyad.length
            },
            {
              title: 'E-posta',
              dataIndex: 'eposta',
              key: 'eposta',
              width: '30%',
              ...this.getColumnSearchProps('eposta'),
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.eposta - b.eposta
            },
            {
              title: 'Telefon',
              dataIndex: 'telefon',
              key: 'telefon',
              width : '15%',
              ...this.getColumnSearchProps('telefon'),
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.telefon - b.telefon
            },
            {
                title: 'Ekip',
                dataIndex: 'ekip',
                key: 'ekip',
                
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.ekip.length - b.ekip.length
              },
              {
                title: 'Rol',
                dataIndex: 'rol',
                key: 'rol',
                
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.rol.length - b.rol.length
              },
              
              {
                title: 'islemler',
                dataIndex: 'Islemler',
                key: 'Islemler',
                render: () => (
                    <span>
                      <a style={{paddingLeft:10}}>...</a>
                    
                    </span>
                  ),
              }
          ];
          return (
            <div className=" mt-4 p-1 min-h-screen bg-gray-200" style={{marginTop:1}}>
                 <div className="shadow  bg-white p-1">
                     <section className="flex flex-row justify-between pb-0o5 mb-1o25 border-gray-200">
                        <div><h2 className="text-size-1o5">Kullanicilar</h2></div>
                        <div>
                        <button type="button" className="ant-btn ant-btn-primary mr-0o5"><span>Toplu davet et</span></button>
                        <button type="button" className="ant-btn ant-btn-primary mr-0o5"><span>Yeni kullanıcı ekle</span></button>
                        </div>
                     </section>
                 <Table columns={columns} dataSource={data} rowSelection={rowSelection}/>   
             </div>
            </div>
           
          )
          
        }
    }


