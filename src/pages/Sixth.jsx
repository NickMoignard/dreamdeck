import React from 'react';

/* Import Images */
import tournamentStructure from '../assets/tournamentStructure.png';
import minecraftUHC from '../assets/minecraftUHC.png';
import minecraftHunters from '../assets/minecraftHunters.png';
import minecraftSurvival from '../assets/minecraftSurvival.png';


export const Sixth = () => {
    return (
        <section id="six"  className="container" >
            <div className="row">
                <div className="col-6 pageLeft">
                    <h1 className="title text-left">EVENT STRUCTURE</h1>
                    <p className="big-p">Dream battles the internet's biggest creators in an action packed, Minecraft extravaganza; Layered with a multitude of challenges to see who really is Minecraft's best gamer.</p>
                    <h3 className="subtitle text-left margin-top">TEAM INFRASTRUCTURE</h3>
                    <p className="big-p margin-top">With his own coding experience, Dream will be hands on the entire build, from development to final production process.<br/>To make everything possible we need; 4 builders, 2 Developers and 2 Producers.<br/>Managment of the staff and overall project, production and design will onto Misfits Management Group (MMG).</p>
                </div>
                <div className="col-6">
                    <div className="row margin-top">
                        <div className="col-12"><img src={tournamentStructure} alt="" /></div>
                    </div>
                    <div class="row margin-top">
                        <div className="col-4 no-pl">
                            <img className="" src={minecraftUHC} alt=""/>                         
                        </div>
                        <div className="col-4">
                            <img className="" src={minecraftHunters} alt=""/>
                        </div>
                        <div className="col-4 no-pr">
                            <img className="" src={minecraftSurvival} alt=""/>                          
                        </div>
                    </div>
                    <div className="row margin-top">
                        <div className="col-4">
                            <p className="text-left">With no helath regenerated, you must use potions, suspicious stews or golden apples to do so instead.</p>
                        </div>
                        <div className="col-4">
                            <p className="text-center">The speedrunner's goal is to beat Minecraft, the Hunter's goal is to kill the speedrunner.</p>
                        </div>
                        <div className="col-4">
                            <p className="text-right">Kill every other player, using weapons that you find in chests scattered across the map.</p>
                        </div>
                    </div>
                        
                </div>
            </div>
        </section>
    );
};
