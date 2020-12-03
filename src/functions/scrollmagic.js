import ScrollMagic from 'scrollmagic';
import $ from 'jquery';

export const scrollmagic = () => {
    $(() => {
        var controller = new ScrollMagic.Controller();
        var firstScene = new ScrollMagic.Scene({
                triggerElement: '#one',
                triggerHook: 1
            })
            .setClassToggle('#one', 'fade-in-text')
            .addTo(controller);



        $("main section*").map((i, v) => {


            var ourScene = new ScrollMagic.Scene({
                    triggerElement: `#${v.id}`,
                    triggerHook: 0.6
                })
                .setClassToggle(`#${v.id}`, 'animate') // add class
                .addTo(controller);
        });
    });
};