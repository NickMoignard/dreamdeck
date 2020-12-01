import React from 'react';
import CountUp from 'react-countup';

export const CaseStudyStats = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h6>STARTED</h6>
                    <p>{props.start}</p>
                </div>
                <div className="col-6">
                    <h6>HOURS WATCHED</h6>
                    <p>
                        <CountUp end={props.hours} />
                    </p>
               </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h6>STREAM DURATION</h6>
                    <p>{props.streamDuration}</p>
                </div>
                <div className="col-6">
                    <h6>PEAK VIEWERS</h6>
                    <p><CountUp end={props.peakViewers} /></p>
                </div>                
            </div>
            <div className="row">
                <div className="col-6">
                    <h6>AVG. CONCURRENT VIEWERS</h6>
                    <p><CountUp end={props.avgConcurrent} /></p>
                </div>    
                <div className="col-6">
                    <h6>TOTAL LIVE VIEWS</h6>
                    <p><CountUp end={props.liveViews} /></p>
                </div>
            </div>
        </div>
        
    );
};


