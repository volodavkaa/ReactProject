import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../styles/AdminLayout.module.css';

const AdminLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
