import React, {FC, ReactNode} from 'react';
import Navbar from "components/Navbar";

interface IMainLayout {
    children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="container">
                {children}
            </div>

            <style jsx>
                {`
                    .container {
                        margin: 0 25px;
                    }
                `}
            </style>
        </>
    );
};

export default MainLayout;