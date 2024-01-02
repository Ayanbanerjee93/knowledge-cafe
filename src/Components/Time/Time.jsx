import React from 'react';
import './Time.css';

const Time = (props) => {
    const { spentTime } = props;
    

    return (
        <div>
            <div className="spent-time">
                <p>Spent Time on Read: {spentTime} minutes </p>
            </div>
        </div>
    );
};

export default Time;
