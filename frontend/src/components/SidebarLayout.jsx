import React from 'react';
import Sidebar from './Sidebar';

const SidebarLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-5">
                {children}
            </div>
        </div>
    );
};

export default SidebarLayout;
