import React from 'react';

/* Import Images */
import tournamentStructure from '../assets/tournamentStructure.png';
import minecraftUHC from '../assets/minecraftUHC.png';
import minecraftHunters from '../assets/minecraftHunters.png';
import minecraftSurvival from '../assets/minecraftSurvival.png';


export const Sixth = () => {
    return (
        <section id="six">
            <div className="row">
                <div className="col-6">
                    <h1>EVENT STRUCTURE</h1>
                    <p>Dream battles the internet's biggest creators in an action packed, Minecraft extravaganza; Layered with a multitude of challenges to see who really is Minecraft's best gamer.</p>
                    <h5>TEAM INFRASTRUCTURE</h5>
                    <p>With his own coding experience, Dream will be hands on the entire build, from development to final production process.<br/>To make everything possible we need; 4 builders, 2 Developers and 2 Producers.<br/>Managment of the staff and overall project, production and design will onto Misfits Management Group (MMG).</p>
                </div>
                <div className="col-6">
                    <div className="row">
                        <img src={tournamentStructure} alt="" />
                    </div>
                    <div class="row">
                        <div className="col-4">
                            <img className="" src={minecraftUHC} alt=""/>                         
                        </div>
                        <div className="col-4">
                            <img className="" src={minecraftHunters} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="" src={minecraftSurvival} alt=""/>                          
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>With no helath regenerated, you must use potions, suspicious stews or golden apples to do so instead.</p>
                        </div>
                        <div className="col-4">
                            <p>The speedrunner's goal is to beat Minecraft, the Hunter's goal is to kill the speedrunner.</p>
                        </div>
                        <div className="col-4">
                            <p>Kill every other player, using weapons that you find in chests scattered across the map.</p>
                        </div>
                    </div>
                        
                </div>
            </div>
        </section>
    );
};
