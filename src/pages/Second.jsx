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

// import topology from '../assets/topology.png'
import { Statistic } from '../components/Statistic';
import { LocalStatistic } from '../components/LocalStatistic';
import { SocialLogoStat } from '../components/SocialLogoStat';


export const Second = () => {
    return (
        <section id="two">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="title">
                        <img className="round bordered" src={dream_dp} alt=""/>
                        <h3>WHO IS</h3>
                        <h1>DREAM?</h1>
                    </div>
                    <p>Dream is Minecraft's largest content creator who has soared to the highest level of internet celebrity at 12 million subs;<b>in just 11 months of creating his viral game-changing speedrun videos.</b></p>
                    <p>Touted as one of the greatest players of the game, his speedrun &amp; creative challenge videos were the catalyst for his impressive rise to fame.</p>
                    <div className="space-child-divs row no-margin">
                        <Statistic rank="23RD" rankName="FASTEST GROWING CHANNEL SITE WIDE"/>
                        <Statistic rank="4TH" rankName="FASTEST GROWING GAMING CHANNEL" />
                        <div className="stat col">
                            <p className="sources">SOURCES: SOCIAL BLADE, GOOLGE ANALYTICS</p>
                        </div>
                    </div>
                    <div className="space-child-divs row no-margin">
                        <LocalStatistic img={usa} stat="56%" />
                        <LocalStatistic img={eu} stat="11%" />
                        <LocalStatistic img={uk} stat="9%" />
                        <LocalStatistic img={ca} stat="6%" />
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="graph">
                        {/* <p>stuff</p> */}
                        {/* GRAPH */}
                        {/* YT POSITIONED STAT */}
                        {/* POSITIONED GRAPH DATE STATS */}
                    </div>

                    <h2 style={{paddingTop: "2px", paddingBottom: "20px"}} >SOCIAL STATS</h2>
                    <div id="socialStats" className="row bordered">
                        <SocialLogoStat logo={yt} followers="12M" />
                        <SocialLogoStat logo={twitter} followers="835,000" />
                        <SocialLogoStat logo={insta} followers="641,000" />
                        <SocialLogoStat logo={twitch} followers="1.2M" />
                    </div>
                </div>
            </div>
        </section>
    );
};
