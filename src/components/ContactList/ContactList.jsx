import React from "react";
//import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContact, searchFilter } from '../../redux/contacts';

// export default function ContactList () {
//   const dispatch = useDispatch();
//   const onDeleteContact = (id) => dispatch(deleteContact(id));
//   const phoneBook = useSelector(searchFilter);
//   return (
//       <ul>
//         {phoneBook.map(nameContact => (
//           <li className={styles.contact} key={nameContact.id}>{nameContact.name}: {nameContact.number}
//             <button className={styles.button} type="button" onClick={()=>onDeleteContact(nameContact.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//   )
// };

// ContactList.propTypes = {
//     phoneBook: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }),
//     ),
// };

export default function ContactList() {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    console.log('Attempting to delete contact with ID:', id);
    if (id === undefined) {
      console.warn('Contact ID is undefined!');
      return;
    }
    dispatch(deleteContact(id));
  };

  const phoneBook = useSelector(searchFilter);
  console.log('Current phoneBook state:', phoneBook);

  return (
    <ul>
      {phoneBook.map(nameContact => {
        console.log('Contact being rendered:', nameContact);
        return (
          <li className={styles.contact} key={nameContact.id}>
            {nameContact.name}: {nameContact.number}
            <button
              className={styles.button}
              type="button"
              onClick={() => onDeleteContact(nameContact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}