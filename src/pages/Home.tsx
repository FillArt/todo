import React from 'react';


interface MainLayoutProps {
    children: React.ReactNode;
}

export const Home = (props: MainLayoutProps) => {

    const { children } = props;

    return (
        <div>
            {children}
        </div>
    );
};