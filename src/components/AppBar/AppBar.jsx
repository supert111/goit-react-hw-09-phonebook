import { connect } from 'react-redux';
import Container from '../../components/Container';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import styles from '../AppBar/AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import {authSelectors} from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => {
  return (      
    <Container>
      <header className={styles.AppBar}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}     
      </header>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);