import React from 'react';
export const Statistic = (props) => {
    return (
        <div className="stat col-sm-12 bordered col-md-4">
            <h4 className="rank">{props.rank}</h4>
            <p className="rankName">{props.rankName}</p>
        </div>
    );
};