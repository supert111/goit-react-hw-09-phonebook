import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './AuthNav.module.css';

const AuthNav = () => (
    <nav className={styles.Registr}>
        <NavLink exact 
        to={routes.register}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}>
            Registration
        </NavLink>
        <NavLink 
        to={routes.login}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}>
            Login
        </NavLink>
    </nav>
)

export default AuthNav;