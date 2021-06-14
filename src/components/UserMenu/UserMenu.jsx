import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import styles from './UserMenu.module.css';
import {authSelectors, authOperations} from '../../redux/auth';


const UserMenu = ({name, onLogout}) => (
    <div className={styles.Login}>
        <span className={styles.title}>Welcome, <span className={styles.login_name}>{name}</span></span>
        <Button variant="warning" size="sm" type="button" onClick={onLogout}>
            Logout
        </Button>{' '}
    </div>
)

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
  });
  
  const mapDispatchToProps = {
    onLogout: authOperations.logOut,
  };


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);