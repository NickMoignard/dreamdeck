import React from 'react';

export const SocialLogoStat = (props) => {
    return (
        <div className="social-logo-stat">
            <div className="logo-container bordered round">
                <img src={props.logo} alt=""/>
            </div>
            <h2 className="font-stroke">{props.followers}</h2>
        </div>
    );
};