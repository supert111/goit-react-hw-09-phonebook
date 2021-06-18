import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './LoginView.module.css';
import { authOperations } from '../../redux/auth';

const initialState = {email: '', password: ''}

export default function LoginView () {
    const [user, setUser] = useState(initialState);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = (element) => {
        const { name, value } = element.target;
        
        setUser(prev => ({...prev, [name]: value}));
        // switch (name) {
        //     case 'email': setEmail(value);
        //         break;
        //     case 'password': setPassword(value);
        //         break;
        //     default: return;
        // }
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch(authOperations.logIn(user));
        // dispatch(authOperations.logIn({email, password}));
        
        setUser(initialState);
        // setEmail('');
        // setPassword('');
    };

        return (
            <Container>
                <h1 className={styles.title_login}>Please log in</h1>
                <Form className={styles.form} onSubmit={handleSubmit}>

                    <Form.Group className={styles.form_group} controlId="formBasicEmail">
                        <Form.Label className={styles.form_label}>Email address</Form.Label>
                        <Form.Control
                            type="email" 
                            placeholder="Enter email" 
                            name="email"
                            value={user.email}
                            onChange={handleChange}/>
                        <Form.Text className="text-muted">
                            Please write down your registered email.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className={styles.form_group} controlId="formBasicPassword">
                        <Form.Label className={styles.form_label}>Password</Form.Label>
                        <Form.Control
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={user.password}
                            onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
