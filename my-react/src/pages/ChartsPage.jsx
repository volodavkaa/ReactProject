import React from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import VisitChart from '../components/Dashboard/Charts/VisitChart';
import UserStatsChart from '../components/Dashboard/Charts/UserStatsChart';
import styles from '../styles/DashboardPage.module.css';

const DashboardPage = () => {
    return (
        <AdminLayout>
            <div className={styles.chartsContainer}>
                <div className={styles.chartCard}>
                    <h2>Website Visits</h2>
                    <VisitChart />
                </div>
                <div className={styles.chartCard}>
                    <h2>User Statistics</h2>
                    <UserStatsChart />
                </div>
            </div>
        </AdminLayout>
    );
};

export default DashboardPage;
