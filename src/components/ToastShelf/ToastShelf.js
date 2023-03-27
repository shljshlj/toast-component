import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant} handleDismiss={handleDismiss}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
