/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './index.css';
import { loginUser } from '../actions/index';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        this.props.data.dispatch(loginUser({ username, password }, () => {
          console.log('CALLBACK');
          this.props.history.push('/dashboard');
        }));
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
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/login">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or
          {' '}
          <a href="/registar">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm,
);

const LoginForm = (props) => (
  <div className="form-container">
    <WrappedNormalLoginForm data={props} history={props.history} />
  </div>
);
const mapStateToProps = (store) => store;

export default withRouter(connect(mapStateToProps)(LoginForm));
