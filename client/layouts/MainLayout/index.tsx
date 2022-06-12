import React, {FC, ReactNode} from 'react';
import Navbar from "components/Navbar";
import Container from "../Container/index";
import Player from 'components/Player/index';

interface IMainLayout {
    children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;