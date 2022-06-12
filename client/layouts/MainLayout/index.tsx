import React, {FC, ReactNode} from 'react';
import Navbar from "components/Navbar";
import styles from './styles.module.scss';

interface IMainLayout {
    children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};

export default MainLayout;