import React from 'react';
import './style/CardStyles.css'; // Make sure to create and import this CSS file

const DisplayCard = ({ hour, date, website, expert }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">Activity information</h2>
                <p><strong>Hours:</strong> {hour}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
                <p><strong>Expert:</strong> {expert}</p>
            </div>
        </div>
    );
};

export default DisplayCard;
