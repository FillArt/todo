import React from 'react';


interface MainLayoutProps {
    children: React.ReactNode;
}

export const Home = (props: MainLayoutProps) => {

    const { children } = props;

    const styleHome = {
        backgroundColor: "#304ffe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: '100vh',
        width: '100vw'
    }

    return (
        <div style={styleHome}>
            {children}
        </div>
    );
};