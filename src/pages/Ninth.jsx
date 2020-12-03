
import React from 'react';
import gameplay from '../assets/gameplay2.png'
import { CaseStudyStats } from '../components/CaseStudyStats';
import { Graph } from '../components/Graph';
import pageNine1 from '../assets/pageNine1.png'

export const Ninth = () => {
    return (
        <section id="nine"  className="container" >
            
            <div className="row">
                <div className="col-12">
                    <p className="study-title">CASE STUDY 2</p>
                    <h1 className="title">DREAM x TUBBO - LIVE DEAL OR NO DEAL</h1>
                </div>
                <div className="col-6">
                    <CaseStudyStats start="SUN, OCT 25, 18:00" hours={238718} streamDuration="1 HOUR 44 MINUTES" peakViewers={156002} avgConcurrent={137722} liveViews={131882} />
                    <img src={gameplay} className="bordered" alt=""/>    
                </div>
                <div className="col-6">
                    <Graph svg={pageNine1} />
                    <p>As a community hosted event, the Minecraft Championship Series is a recurring gathering of the community's biggest streamers &amp; content creators. Following the formation of 10 teams of four, the event begins with each group going head to head in a series of minigames putting each competitor's skills to the test.</p>
                    <p>Dream's involvement in the event is pivotal, with his individual broadcast accounting for over a third of the event's overall viewership.</p>
                </div>
            </div>
        </section>
    );
};
