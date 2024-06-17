import React, { useState } from 'react';

function FooterSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <h2 className="toggle-header" onClick={toggleContent}>{title}</h2>
            <div className={`toggle-content ${isOpen ? 'active' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default FooterSection