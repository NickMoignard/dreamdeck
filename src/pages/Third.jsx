import React from 'react';
import dreamFanArt from '../assets/dreamFanArt.png';

export const Third = () => {
    return (
        <section id="three" className="container" >
            <div className="row">
                <div className="col-12 padding-bottom-1"><h1 className="title" >DREAM X YOUTUBE MCG</h1></div>


                    <div className="col-md-4 col-sm-12 padding-bottom-2">
                        <img className="bordered" src={dreamFanArt} alt="" />
                    </div>
                
                    <div className="col-md-8 col-sm-12" >
                        <p>Dream MCC at its core is about <b>bringing gamers and communities together</b>, to create an all inclusive broadend community within itself that allows the freedom of belonging, to all creators involved.</p>
                        <br/>
                        <p>This commmunity focused live event with Dream at its center garners large scale creators; new or experienced, to establish and catalyse the Minecraft community on <b>Youtube</b> as the <b>cornerstone platform</b>.</p>
                        <br/>
                        <p>With a premium spectacle of competition, ever changing event modes to stay ahead of faming and mainstream trends, the Dream MCC will encapsulate the unique creative elements in his videos to <b>transcend into an interactive powerhouse </b>of live entertainment.</p>
                    </div>    

   
                    <div className="col-12">
                        <h2 className="margin-top title">CREATING &amp; GROWING A TRULY INCLUSIVE COMMUNITY</h2>
                    </div>
         
            </div>
            
        </section>
    );
};

