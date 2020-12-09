
import React from 'react';
import gameplay from '../assets/gameplay2.png'
import { CaseStudyStats } from '../components/CaseStudyStats';
import { Graph } from '../components/Graph';
import pageNine1 from '../assets/pageNine1.png'

export const Ninth = () => {
    return (
        <section id="nine"  className="container" >
            
            <div className="row">
                <div className="col-12 padding-bottom-3">
                    <p className="study-title">CASE STUDY 2</p>
                    <h1 className="title">DREAM x TUBBO - LIVE DEAL OR NO DEAL</h1>
                </div>
                <div className="col-md-6 col-sm-12">
                    <CaseStudyStats start="SUN, OCT 25, 18:00" hours={238718} streamDuration="1 HOUR 44 MINUTES" peakViewers={156002} avgConcurrent={137722} liveViews={131882} />
                    <img src={gameplay} className="mineChampScreen bordered" alt=""/>    
                </div>
                <div className="col-md-6 col-sm-12">
                    <Graph svg={pageNine1} />
                    <p className="margin-top">Drawing upon his talents in designing &amp; developing unique Minecraft gamemodes, Dream recreats the globally renowned game show model 'Deal or No Deal' within the Minecraft universe.</p>
                    <p className="margin-top">Hosted live on Twitch alongside co-host Tubbo, the duo demonstrates their limitless creative aptitiude &amp; talented development skills, producing a truly unique experience.</p>
                </div>
            </div>
        </section>
    );
};
