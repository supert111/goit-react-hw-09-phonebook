import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
    <nav>
        <NavLink exact 
            to={routes.home}
            className={styles.nav_link}
            activeClassName={styles.nav_link_active}>
            Home
        </NavLink>
        
        {isAuthenticated && (
            <NavLink 
                to={routes.contacts}
                className={styles.nav_link}
                activeClassName={styles.nav_link_active}>
                Contacts
            </NavLink>
        )}

    </nav>
)

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);