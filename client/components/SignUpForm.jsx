/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from 'antd';
import './index.css';
import { signupUser } from '../actions/index';

const { Option } = Select;

class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      redirect: false,
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          const {
            firstName,
            lastName,
            email,
            password,
            country,
            phone,
          } = values;
          this.props.data.dispatch(signupUser({
            firstName,
            lastName,
            email,
            password,
            country,
            phone,
          }, () => {
            this.setState({ redirect: true });
            this.props.history.push('/dashboard');
          }));
        }
      });
    };

    handleConfirmBlur = (e) => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };

    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      if (this.state.redirect) {
        return <Redirect to="/login" />;
      }

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '91',
      })(
        <Select style={{ width: 70 }}>
          <Option value="91">+91</Option>
          <Option value="87">+87</Option>
        </Select>,
      );


      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="signup-form">
          <Form.Item label="First Name">
            {getFieldDecorator('firstName', {
              rules: [
                {
                  required: true,
                  message: 'Please enter your first name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Middle Name">
            {getFieldDecorator('middleName', {
              rules: [
                {
                  required: false,
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Last Name">
            {getFieldDecorator('lastName', {
              rules: [
                {
                  required: true,
                  message: 'Please enter your last name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="Country" hasFeedback>
            {getFieldDecorator('country', {
              rules: [{ required: true, message: 'Please select your country!' }],
            })(
              <Select placeholder="Please select a country">
                <Option value="india">India</Option>
                <Option value="usa">U.S.A</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
              rules: [{ required: false }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the
                {' '}
                <a href="/agreement">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const SignUpForm = (props) => (
  <div className="form-container">
    <WrappedRegistrationForm data={props} />
  </div>
);

const mapStateToProps = (store) => store;

export default withRouter(connect(mapStateToProps)(SignUpForm));
