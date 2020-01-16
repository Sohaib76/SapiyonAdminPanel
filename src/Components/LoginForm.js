import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import '../App.css';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
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
          <Button type="primary" htmlType="submit" className="ant-btn font-medium s-h-32 Style-margin-bottom30 ant-btn-primary ant-btn-block">
            Giriş Yap
          </Button>
          <a className="login-form-forgot " href="">
            {/* Forgot your password? */}
                Şifrenizi mı unuttunuz?
          </a>
                Hesabınız yok mu?
          {/* Don't have an account? */}
           <a href="" className="underline s-ml-20" style={{color:'#222', textDecorationLine: 'underline'}}>
                Hesap Oluştur
               {/* Create Account */}
               </a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default WrappedNormalLoginForm;
