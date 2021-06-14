import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './components/routes';
import {authOperations} from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Spinner from 'react-bootstrap/Spinner';
import styles from './App.module.css';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-view" */));
const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-view" */));
const NotFoundView = lazy(() => 
    import('./views/NotFoundView' /* webpackChunkName: "page-404-view" */)
);

class App extends Component { 

    componentDidMount() {
        this.props.onGetCurretnUser();
    }

    render() {
        return (
            <>
                <AppBar />
            
                <Suspense fallback={<div className={styles.spinner_style}>
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="primary" />
                    </div>}>
                    <Switch>
                        <PublicRoute exact path={routes.home} component={HomeView} />
                        <PrivateRoute path={routes.contacts} component={ContactsView} redirectTo={routes.login}/>
                        <PublicRoute path={routes.register} restricted component={RegisterView} redirectTo={routes.contacts}/>
                        <PublicRoute path={routes.login} restricted component={LoginView} redirectTo={routes.contacts}/>
                        <PublicRoute component={NotFoundView} />
                    </Switch>
                </Suspense>
            </>
        )
    }
}
  
const mapDispatchToProps = {
    onGetCurretnUser: authOperations.getCurrentUser,
  };

export default connect(null, mapDispatchToProps)(App);
