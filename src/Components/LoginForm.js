import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import '../App.css';
import { Link,BrowserRouter as Router, Route, Redirect, useHistory, NavLink, HashRouter} from 'react-router-dom'
import CustomerInfo from '../Pages/CustomerInfo';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // let path = '/Table.js'
        // let history = useHistory();
        // history.push(path);
        alert("Ok")

        console.log('Received values of form: ', values);
      }
    });
  }
 

  // navigateToHome = () => {
  //     if(true){
  //       <Router>
  //         <Redirect push to="/home" />
  //         <Route path="/home" component={CustomerInfo}/>
  //       </Router>
  //     }
         
  // }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Router>
          <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Sifre' },
     
        ],
          })(
         
            (<Input.Password  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Password"/>)
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Beni hatırla</Checkbox>)}
          
          {/* login-form-button  */}
         
          <Link to="/home" className="ant-btn font-medium s-h-32 Style-margin-bottom30 ant-btn-primary ant-btn-block"> Giriş Yap</Link>
          {/* <Button type="primary" htmlType="submit" 
          className="ant-btn font-medium s-h-32 Style-margin-bottom30 ant-btn-primary ant-btn-block">
            Giriş Yap
          </Button> */}
          <a className="login-form-forgot " href="">
            {/* Forgot your password? */}
                Şifrenizi mı unuttunuz?
          </a>
                Hesabınız yok mu?
          {/* Don't have an account? */}
           
               {/* Create Account */}
              <a href=""  className="underline s-ml-20" style={{color:'#222', textDecorationLine: 'underline'}}>
                Hesap Oluştur </a>
               
        </Form.Item>
      </Form>
      </Router>
      
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default WrappedNormalLoginForm;
