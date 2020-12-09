import React from 'react';
import dream_dp from '../assets/dream_dp.png';
import usa from '../assets/usa.png';
import eu from '../assets/eu.png';
import uk from '../assets/uk.png';
import ca from '../assets/ca.png';
import yt from '../assets/yt.png';
import twitch from '../assets/twitch.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import graphOne from '../assets/graph-1.png';

// import topology from '../assets/topology.png'
import { Statistic } from '../components/Statistic';
import { LocalStatistic } from '../components/LocalStatistic';
import { SocialLogoStat } from '../components/SocialLogoStat';


export const Second = () => {
    return (
        <section id="two" className="container">
            <div className="row">
                <div className="left col-lg-6 col-md-12">
                    <div className="row padding-bottom-2">
                        <div className="col-3"><img className="round bordered" src={dream_dp} alt=""/></div>
                        <div className="col-9"><h3 className="thin-text">WHO IS</h3>
                        <h1 className="text-left title big-title">DREAM?</h1></div>
                    </div>
                    <div className=" padding-bottom-2">
                        <p className="">Dream is Minecraft's largest content creator who has soared to the highest level of internet celebrity at 12 million subs; <b>in just 11 months of creating his viral game-changing speedrun videos.</b></p>
                        <p className="">Touted as one of the greatest players of the game, his speedrun &amp; creative challenge videos were the catalyst for his impressive rise to fame.</p>
                    </div>
                    <div id="pageTwoStats" className=" space-child-divs padding-bottom-2  row no-margin">
                        <Statistic rank="23RD" rankName="FASTEST GROWING CHANNEL SITE WIDE"/>
                        <Statistic rank="4TH" rankName="FASTEST GROWING GAMING CHANNEL" />
                        <div className="stat col-xl-3 col-md-12">
                            <p className="sources">SOURCES: SOCIAL BLADE, GOOLGE ANALYTICS</p>
                        </div>
                    </div>
                    <div className=" space-child-divs row no-margin">
                        <LocalStatistic img={usa} stat="56%" />
                        <LocalStatistic img={eu} stat="11%" />
                        <LocalStatistic img={uk} stat="9%" />
                        <LocalStatistic img={ca} stat="6%" />
                    </div>
                </div>
                <div id="pageTwoRight" className="right col-lg-6 col-md-12">
                    <div className="graph">

                        <img src={graphOne} alt=""/>
                        {/* <p>stuff</p> */}
                        {/* GRAPH */}
                        {/* YT POSITIONED STAT */}
                        {/* POSITIONED GRAPH DATE STATS */}
                    </div>
                    
                    <div id="socialStatsContainer" className="row">
                        
                        <div id="socialStats" className="row bordered">
                            <h2 className="socialStatsTitle" >SOCIAL STATS</h2>
                            <SocialLogoStat logo={yt}/>
                            <SocialLogoStat logo={twitter}/>
                            <SocialLogoStat logo={insta}/>
                            <SocialLogoStat logo={twitch}/>
                            <h2 className="font-stroke">12M</h2>
                            <h2 className="font-stroke">835,000</h2>
                            <h2 className="font-stroke">641,000</h2>
                            <h2 className="font-stroke">1.2M</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
