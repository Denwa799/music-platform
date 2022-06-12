import React, {FC, ReactNode} from 'react';
import styles from './styles.module.scss'

interface IContainer {
    children: ReactNode;
}

const Container: FC<IContainer> = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
};

export default Container;