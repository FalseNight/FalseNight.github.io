import React from 'react';

import "./contactItem.css"

const ContactItem = ({ icon, text, url }) => {
    const className = icon;

    return (
        <a className="contact-item" href={url} target="_blank" rel="me noopener noreferrer">
            <span className="contact-item-icon contact-item-icon-margin">
                <i className={className} aria-hidden="true"></i>
            </span>
            <span className="contact-item-text">{text}</span>
        </a>
    );
}

export default ContactItem;