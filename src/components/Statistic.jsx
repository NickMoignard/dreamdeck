import React from 'react';
export const Statistic = (props) => {
    return (
        <div className="stat bordered col">
            <h4 className="rank">{props.rank}</h4>
            <p className="rankName">{props.rankName}</p>
        </div>
    );
};