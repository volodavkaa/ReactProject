import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <ul>
        <li onClick={() => navigate('/')}>Dashboard</li>
        <li onClick={() => navigate('/charts')}>Charts</li>
        <li onClick={() => navigate('/stats')}>Stats</li> {}
      </ul>
    </div>
  );
};

export default Sidebar;
