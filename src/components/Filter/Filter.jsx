import React from "react";
import styles from "./Filter.module.css"
import { connect } from 'react-redux';
import {searchByFilter} from '../../redux/contacts';

const Filter = ({onChange}) => {
    return (
        <label>Find contacts by name
            <input className={styles.input_display}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={onChange}
            />
        </label>
    )
}


const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(searchByFilter(e.target.value)),
})

export default connect(null, mapDispatchToProps)(Filter);