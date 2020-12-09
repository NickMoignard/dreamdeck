import React from 'react';
import gameplay from '../assets/gameplay.png'
import { CaseStudyStats } from '../components/CaseStudyStats';
import { Graph } from '../components/Graph';
import pageEight1 from '../assets/pageEight1.png'

export const Eighth = () => {
    return (
        <section id="eight"  className="container" >
            
            <div className="row">
                <div className="col-12 padding-bottom-3">
                    <p className="study-title">CASE STUDY 1</p>
                    <h1 className="title">MINECRAFT CHAMPIONSHIP x DREAM</h1>
                </div>
                <div className="col-6">
                    <CaseStudyStats start="SAT, SEP 26 18:57" hours={321057} streamDuration="2 HOURS 37 MINUTES" peakViewers={133843} avgConcurrent={122697} liveViews={227051} />
                    <img src={gameplay} className=" mineChampScreen bordered" alt=""/>    
                </div>
                <div className="col-6">
                    <Graph svg={pageEight1} />
                    <p className="margin-top">As a community hosted event, the Minecraft Championship Series is a recurring gathering of the community's biggest streamers &amp; content creators. Following the formation of 10 teams of four, the event begins with each group going head to head in a series of minigames putting each competitor's skills to the test.</p>
                    <p className="margin-top">Dream's involvement in the event is pivotal, with his individual broadcast accounting for over a third of the event's overall viewership.</p>
                </div>
            </div>
        </section>
    );
};
 