import ScrollMagic from 'scrollmagic';
import $ from 'jquery';

export const scrollmagic = () => {
    $(() => {
        var controller = new ScrollMagic.Controller();
        $("main section").map((i, v) => {

   
            var ourScene = new ScrollMagic.Scene({
                triggerElement: `#${v.id}`  //,
                // triggerHook: 0.1,
                // reverse: false
            })
            .setClassToggle(`#${v.id}`, 'fade-in') // add class
            .addTo(controller);    
        });
    });      
};