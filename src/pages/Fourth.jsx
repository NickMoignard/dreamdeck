import React from 'react';

const sharedCoreValues = [
    { a: "BUILDING OUTSTANDING COMMUNITIES", b: "COMMUNITY DRIVEN, COLLABORATIONAL, PERSONALITY FOCUSED" },
    { a: "FREEDOM OF EXPRESSION", b: "INTERACTIVE EVENT FUELING CREATIVE IDEAS & CONTENT" },
    { a: "FREEDOM OF BELONGING", b: "ALL INCLUSIVE (GAMING OR NON GAMING CREATORS)" },
    { a: "BEING THE NO.1 STREAMING PLATFORM", b: "THE LARGEST LIVE STREAMED GAMING EVENT FOR CONTENT CREATORS" }
];


export const Fourth = () => {
    return (
        <section id="four"  className="container" >
            
            <div className="row scv-head">
                <div className="col-12 padding-bottom-3">
                    <h1 className="title">SHARED CORE VALUES</h1>
                </div>
                <div className="col-6">
                    <h3 className="underline">YOUTUBE VALUES</h3>
                    <p className="margin-top">BUILDING OUTSTANDING COMMUNITIES</p>
                    <p>FREEDOM OF EXPRESSION</p>
                    <p>FREEDOM OF BELONGING</p>
                    <p>BEING THE NO.1 STREAMING PLATFORM</p>    
                </div>    
 
                <div className="col-6">
                    <h3 className="underline ">MCG PILLARS</h3>
                    <p className="margin-top">COMMUNITY DRIVEN, COLLABORATIONAL, PERSONALITY FOCUSED</p>
                    <p>INTERACTIVE EVENT FUELING CREATIVE IDEAS &amp; CONTENT</p>
                    <p>ALL INCLUSIVE (GAMING OR NON GAMING CREATORS)</p>
                    <p>THE LARGEST LIVE STREAMED GAMING EVENT FOR CONTENT CREATORS</p>    
                </div>
                
            </div>  
        </section>
    );
};


const quickRow = (value, pillar) => {
    return( 
        <div className="row shared-core-values">
            <div className="col-4 youtube-value">{ value }</div>
            <div className="col-4 svg-line"></div>
            <div className="col-4 mcg-pillar">{ pillar }</div>
        </div>
     );
};
