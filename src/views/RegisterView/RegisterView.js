import { Component } from "react";
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './RegisterView.module.css';
import { authOperations } from '../../redux/auth';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
        
    handleSubmit = e => {
        e.preventDefault();
        
        this.props.onRegister(this.state);
        
        this.setState({ name: '', email: '', password: '' });
    };
        
    render() {
        return (
            <Container>
                <h1 className={styles.title_register}>Please register</h1>
                <Form className={styles.form} onSubmit={this.handleSubmit}>
                    <Form.Group className={styles.form_group} controlId="formBasicName" >
                        <Form.Label className={styles.form_label}>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="name"
                            placeholder="Enter name" 
                            onChange={this.handleChange}/>
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
                            onChange={this.handleChange}/>
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
                            onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }

}

const mapDispatchToProps = {
    onRegister: authOperations.register,
}


export default connect(null, mapDispatchToProps)(RegisterView);