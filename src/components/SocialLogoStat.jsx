import React from 'react';

export const SocialLogoStat = (props) => {
    return (
        <React.Fragment>
            <div className="social-logo-stat">
                
                <img src={props.logo} alt=""/>

                
            </div>
            {/* <h2 className="font-stroke">{props.followers}</h2> */}
        </React.Fragment>
    );
};