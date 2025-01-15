import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import styles from './UserMenu.module.css';
import {authSelectors, authOperations} from '../../redux/auth';

export default function UserMenu () {
  const dispatch = useDispatch(); 
  const name = useSelector(authSelectors.getUsername);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch])


  return (
    <div className={styles.Login}>
        <span className={styles.title}>Welcome, <span className={styles.login_name}>{name}</span></span>
        <Button variant="warning" size="sm" type="button" onClick={onLogout}>
            Logout
        </Button>{' '}
    </div>
  )
}