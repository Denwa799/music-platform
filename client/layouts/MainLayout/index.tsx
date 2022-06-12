import React, {FC, ReactNode} from 'react';
import Navbar from "components/Navbar";
import Container from "../Container/index";
import Player from 'components/Player/index';
import Head from 'next/head';

interface IMainLayout {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: FC<IMainLayout> = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{`${title} - музыкальная площадка` || 'Музыкальная площадка'}</title>
                <meta name="description" content={'Музыкальаня площадка. Загрузи свой трек и стань знаменитым. ' + description}/>
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || "Музыка, треки, артисты, музыкальная площадка"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/>
            <Container>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;