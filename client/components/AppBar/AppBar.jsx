import { useSelector } from 'react-redux';
import Container from '../Container';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import styles from './AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Container>
      <header className={styles.AppBar}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </Container>
  );
}
