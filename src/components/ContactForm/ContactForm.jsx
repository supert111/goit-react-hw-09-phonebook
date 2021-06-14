import PropTypes from 'prop-types';
import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from "./ContactForm.module.css";
import shortid from 'shortid';
import { addContact } from '../../redux/contacts';

const nameInputId = shortid.generate();
const phoneInputId = shortid.generate();

class ContactForm extends Component { 
    state = {
        name: '',
        number: '',
    };

    handleChange = (element) => {
        const { name, value } = element.target;
        this.setState ({ [name]: value }); 
    };

    handleSubmit = (el) => {
        el.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    }

    render() {
        const { name, number } = this.state;
        return (
            
                <form className={styles.wrapper} onSubmit={this.handleSubmit}>
                    <label htmlFor={nameInputId}>Name
                        <input className={styles.input_display}
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            id={nameInputId}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={styles.label_block} htmlFor={phoneInputId}>Number
                        <input className={styles.input_display}
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            id={phoneInputId}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className={styles.button_prime} type="submit" >Add contact</button>
                </form>            
            
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(addContact( name, number )),
})

export default connect(null, mapDispatchToProps)(ContactForm);