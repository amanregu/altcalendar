/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import Dashboard from './home/Dashboard';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './home/LandingPage';
import SignUpPage from './home/SignUpPage';
import LoginPage from './auth/LoginPage';
import Dashboard from './home/Dashboard';
import { verifyUser } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function

class App extends Component {
  componentDidMount() {
    const storage = localStorage;
    if (storage.authToken) {
      this.props.dispatch(verifyUser(storage.authToken));
    }
  }

  protectedRoutes = () => (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );

  unprotectedRoutes = () => (
    <Switch>
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );

  render() {
    return (
      <>
        {this.props.auth.isAuthInProgress ? (
          <div>Loading</div>
        ) : this.props.auth.user ? (
          this.protectedRoutes()
        ) : (
          this.unprotectedRoutes()
        )}
      </>
    );
  }
}

const mapStateToProps = (store) => store;

export default withRouter(connect(mapStateToProps)(App));
