import React from 'react';

const Sidebar = ({...props}) => {
    return (
        <aside className={`sidebar ${props.className}`}>
            some content
        </aside>
    );
};

export default Sidebar;