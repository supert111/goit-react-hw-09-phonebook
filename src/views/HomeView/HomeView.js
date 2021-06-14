import { connect } from 'react-redux';
import styles from './HomeView.module.css';
import {authSelectors} from '../../redux/auth';

const HomeView = ({name}) => (
    <section className={styles.hero}>
        <h1 className={styles.hero_title}>Wellcome, <span className={styles.hero_name}>{name}</span></h1>
    </section>
)

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
  });

export default connect(mapStateToProps)(HomeView);