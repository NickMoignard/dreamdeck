import React from 'react';
import ytLogo from '../assets/yt2.png'
import twitchLogo from '../assets/twitch2.png'
import streamStats from '../assets/streamStats.png'
import concurrentViewers from '../assets/concurrentViewers.svg'
import audienceRetention from '../assets/audienceRetention.svg'
import graph1 from '../assets/pageFive1.png'
import graph2 from '../assets/pageFive2.png'
import { Graph } from '../components/Graph';


/* 
    count up jquery functions to be addded
    - audience
    - viewership
*/ 

export const Fifth = () => {
    return (
        <section id="five"  className="container" >
            
            <div className="row">
                <div className="col-12 padding-bottom-2">
                    <h1 className="title">DREAMSTREAMS</h1>
                </div>
                <div className="col-6">
                    <div className="row padding-bottom-2 caseStudyLeft">
                        <img className="logo" src={ytLogo} alt=""/>
                        <h4 className="text-right inBlock"><span className="red">STREAM CASE STUDY</span> - <span className="green">SEP 2020</span></h4>
                    </div>
                    <div className="graph padding-bottom-2">
                        <img src={graph1} alt=""/>
                    </div>
                    <div className="graph">
                        <img src={graph2} alt=""/>
                    </div>
                    <Graph svg={audienceRetention} />
                </div>
                <div className="col-6 caseStudyRight">
                    <div className="row padding-bottom-2">
                        <img className="logo" src={twitchLogo} alt=""/>
                        <h4 className=" text-right inBlock"><span className="purple">STREAM CASE STUDY</span> - <span className="green">SEP 2020</span></h4>
                    </div>
                    <div className="row padding-bottom-2">
                        <p>The Dream Team SMP streamed their online adventures to a combined live audience of <span id="live-audience" className="inline-stat"></span> on Twitch TV; with Dream contributing over <span id="percent-viewership" className="inline-stat"></span> of viewership.</p>
                    </div>
                    <div className="row">
                        <img src={streamStats} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};
