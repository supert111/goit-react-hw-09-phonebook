import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';

export default function Navigation () {

    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
    
    return (
        <nav>
            <NavLink exact 
                to={routes.home}
                className={styles.nav_link}
                activeClassName={styles.nav_link_active}>
                Home
            </NavLink>
            
            {isLoggedIn && (
                <NavLink 
                    to={routes.contacts}
                    className={styles.nav_link}
                    activeClassName={styles.nav_link_active}>
                    Contacts
                </NavLink>
            )}
    
        </nav>
    )
}
