import React from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import CountryStats from '../components/Dashboard/Stats/CountryStats';
import styles from '../styles/StatsPage.module.css';

const StatsPage = () => {
    return (
        <AdminLayout>
            <div className={styles.statsContainer}>
                <h2 className={styles.title}>Top Countries</h2>
                <div className={styles.chartContainer}>
                    <CountryStats />
                </div>
            </div>
        </AdminLayout>
    );
};

export default StatsPage;
