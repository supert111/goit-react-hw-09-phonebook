import React, { Component } from "react";
import { connect } from 'react-redux';
import Container from '../components/Container';
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { fetchContacts, getIsLoading } from '../redux/contacts';
import styles from "../../src/App.module.css";

class ContactsView extends Component { 

    state = {};

    componentDidMount() {
        this.props.fetchContact();
    }

    handleFilter = (element) => {
        const { value } = element.target;
        this.setState ({ filter: value });  
    };

    render() {
        return (
            <Container>    
                <div className={styles.wrapper}>
                    <h1 className={styles.title_Phonebook}>Phonebook</h1>
                    <ContactForm /> 
                    <h2 className={styles.title_Contacts}>Contacts</h2>
                    <Filter /> 
                    {this.props.isLoading && <h1>Loading...</h1>}
                    <ContactList />
                </div>
            </Container>          
        )
    }
}
  
const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContact: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);