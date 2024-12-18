import React from 'react';
import AdminLayout from '../components/Layout/AdminLayout';

const DashboardPage = () => {
  return (
    <AdminLayout>
      <h1 style={{ color: '#FFF', textAlign: 'center' }}>Адмін панель</h1>
      <p style={{ color: '#FFF', textAlign: 'center' }}>
        Головне вікно
      </p>
    </AdminLayout>
  );
};

export default DashboardPage;
