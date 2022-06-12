import * as React from 'react';
import MainLayout from "layouts/MainLayout/index";
import styles from './styles.module.scss';

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className={styles.center}>
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;