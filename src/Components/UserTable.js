import React from 'react'
import { Table, Input, Button, Icon ,Drawer, Form, Col, Row, Select, DatePicker} from 'antd';
import Highlighter from 'react-highlight-words';
import '../Pages/UsersPage.css'
import '../App.css'

const { Option } = Select;



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






class UserTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
        visible: false
      };



      showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };


    
    // openNav = () => {

    // }


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
        const { getFieldDecorator } = this.props.form;
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
                        <button type="button" onClick={this.showDrawer}
                        className="ant-btn ant-btn-primary mr-0o5"><span>Yeni kullanıcı ekle</span></button>
                        </div>
                     </section>
                 <Table columns={columns} dataSource={data} rowSelection={rowSelection}/>   
                 </div>
                      <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                  >
                    <Form layout="vertical" hideRequiredMark>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item label="Name">
                            {getFieldDecorator('name', {
                              rules: [{ required: true, message: 'Please enter user name' }],
                            })(<Input placeholder="Please enter user name" />)}
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="Url">
                            {getFieldDecorator('url', {
                              rules: [{ required: true, message: 'Please enter url' }],
                            })(
                              <Input
                                style={{ width: '100%' }}
                                addonBefore="http://"
                                addonAfter=".com"
                                placeholder="Please enter url"
                              />,
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item label="Owner">
                            {getFieldDecorator('owner', {
                              rules: [{ required: true, message: 'Please select an owner' }],
                            })(
                              <Select placeholder="Please select an owner">
                                <Option value="xiao">Xiaoxiao Fu</Option>
                                <Option value="mao">Maomao Zhou</Option>
                              </Select>,
                            )}
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="Type">
                            {getFieldDecorator('type', {
                              rules: [{ required: true, message: 'Please choose the type' }],
                            })(
                              <Select placeholder="Please choose the type">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                              </Select>,
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item label="Approver">
                            {getFieldDecorator('approver', {
                              rules: [{ required: true, message: 'Please choose the approver' }],
                            })(
                              <Select placeholder="Please choose the approver">
                                <Option value="jack">Jack Ma</Option>
                                <Option value="tom">Tom Liu</Option>
                              </Select>,
                            )}
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="DateTime">
                            {getFieldDecorator('dateTime', {
                              rules: [{ required: true, message: 'Please choose the dateTime' }],
                            })(
                              <DatePicker.RangePicker
                                style={{ width: '100%' }}
                                getPopupContainer={trigger => trigger.parentNode}
                              />,
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={24}>
                          <Form.Item label="Description">
                            {getFieldDecorator('description', {
                              rules: [
                                {
                                  required: true,
                                  message: 'please enter url description',
                                },
                              ],
                            })(<Input.TextArea rows={4} placeholder="please enter url description" />)}
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                    <div
                      style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                      }}
                    >
                      <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                        Cancel
                      </Button>
                      <Button onClick={this.onClose} type="primary">
                        Submit
                      </Button>
                    </div>
            </Drawer>
            </div>
           
          )
          
        }
    }

const USerTable = Form.create()(UserTable);
export default USerTable;


