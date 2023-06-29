import React, { useState, useEffect } from 'react';


const Expandable= ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            {children}
            <button onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</button>
        </div>
    );
};

export default Expandable;
