// import React from "react";
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import styles from './ContactList.module.css';
// import { deleteContact, searchFilter } from '../../redux/contacts';

// export default function ContactList () {
//   const dispatch = useDispatch();
//   const onDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };
//   const phoneBook = useSelector(searchFilter);
//   // Перевірка даних

//   return (
//     <ul>
//       {phoneBook.map(nameContact => (
//         <li className={styles.contact} key={nameContact._id}>
//           {nameContact.name}: {nameContact.number}
//           <button
//             className={styles.button}
//             type="button"
//             onClick={() => onDeleteContact(nameContact._id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
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

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import {
  deleteContact,
  searchFilter,
  getIsLoading,
} from '../../redux/contacts';

export default function ContactList() {
  const dispatch = useDispatch();
  const phoneBook = useSelector(searchFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(state => state.state.error);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className={styles.list}>
      {phoneBook.map(nameContact => (
        <li className={styles.contact} key={nameContact._id || nameContact.id}>
          <span>
            {nameContact.name}: {nameContact.number}
          </span>
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContact(nameContact._id || nameContact.id)}
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  phoneBook: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  isLoading: PropTypes.bool, // Додано
};