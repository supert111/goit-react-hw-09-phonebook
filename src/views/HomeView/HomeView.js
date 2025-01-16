import { useSelector } from 'react-redux';
import styles from './HomeView.module.css';
import {authSelectors} from '../../redux/auth';

export default function HomeView () {
    const name = useSelector(authSelectors.getUsername);
    return (
        <section className={styles.hero}>
            <h1 className={styles.hero_title}>Wellcome, <span className={styles.hero_name}>{name}</span></h1>
        </section>
    )
}