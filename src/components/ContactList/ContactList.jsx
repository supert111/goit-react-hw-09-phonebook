import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContact, searchFilter } from '../../redux/contacts';

const ContactList = ({ phoneBook, onDeleteContact }) => {
  return (
      <ul>
        {phoneBook.map(nameContact => (
          <li className={styles.contact} key={nameContact.id}>{nameContact.name}: {nameContact.number}
            <button className={styles.button} type="button" onClick={()=>onDeleteContact(nameContact.id)}>Delete</button>
          </li>
        ))}
      </ul>
  )
};

ContactList.propTypes = {
    phoneBook: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  phoneBook: searchFilter(state),
})

const mapDispatchProps = dispatch => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchProps)(ContactList);