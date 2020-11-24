import { defaultCipherList } from 'constants';
import React from 'react';

export const LocalStatistic = (props) => {
    return (
        <div className="col locality-stat">
            <img src={props.img} alt=""/>
            <p>{props.stat}</p>   
        </div>
    );
};