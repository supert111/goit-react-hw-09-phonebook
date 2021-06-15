import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import styles from "./ContactForm.module.css";
import shortid from 'shortid';
import { addContact } from '../../redux/contacts';

const nameInputId = shortid.generate();
const phoneInputId = shortid.generate();

export default function ContactForm () { 
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const dispatch = useDispatch();
    
    const handleChange = (element) => {
        const { name, value } = element.target;

        switch (name) {
            case 'name': setName(value);
                break;
            case 'number': setNumber(value);
                break;
            default: console.warn(`Тип поля name - ${name} не обрабатывается`);
        }
    };

    const handleSubmit = (el) => {
        el.preventDefault();
        
        dispatch(addContact({name, number}));

        setName('');
        setNumber('');
    }

        return (           
                <form className={styles.wrapper} onSubmit={handleSubmit}>
                    <label htmlFor={nameInputId}>Name
                        <input className={styles.input_display}
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            id={nameInputId}
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </label>
                    <button className={styles.button_prime} type="submit" >Add contact</button>
                </form>            
            
        )
}