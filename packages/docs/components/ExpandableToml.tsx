import { useState } from 'react';

const ExpandableToml = ({ tomlContent }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
    setExpanded(!expanded);
    };

    return (
    <div>
        <button onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</button>
        {expanded && (
        <pre>
            <code>{tomlContent}</code>
        </pre>
        )}
    </div>
    );
};

export default ExpandableToml;