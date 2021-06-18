import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './RegisterView.module.css';
import { authOperations } from '../../redux/auth';

const initialState = {name: '', email: '', password: ''}

export default function RegisterView () {
    const [userRegister, setUserRegister] = useState(initialState);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        setUserRegister(prev => ({...prev, [name]: value}));
        // switch (name) {
        //     case 'name': setName(value);
        //         break;
        //     case 'email': setEmail(value);
        //         break;
        //     case 'password': setPassword(value);
        //         break;
        //     default: return;
        // }
    };
        
    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch(authOperations.register(userRegister));
        // dispatch(authOperations.register({name, email, password}));
        
        setUserRegister(initialState);
        // setName('');
        // setEmail('');
        // setPassword('');
    };
        
        return (
            <Container>
                <h1 className={styles.title_register}>Please register</h1>
                <Form className={styles.form} onSubmit={handleSubmit}>
                    <Form.Group className={styles.form_group} controlId="formBasicName" >
                        <Form.Label className={styles.form_label}>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="name"
                            placeholder="Enter name" 
                            onChange={handleChange}/>
                        <Form.Text className="text-muted" >
                            We'll never share your name with anyone else.
                        </Form.Text>
                    
                    </Form.Group>

                    <Form.Group className={styles.form_group} controlId="formBasicEmail" >
                        <Form.Label className={styles.form_label}>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="Enter email" 
                            onChange={handleChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className={styles.form_group} controlId="formBasicPassword" >
                        <Form.Label className={styles.form_label}>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            name="password"
                            placeholder="Password" 
                            onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
}
