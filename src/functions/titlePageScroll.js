import ScrollMagic from 'scrollmagic';
import $ from 'jquery';

export const titlePageScroll = () => {
    $(() => {
        var controller = new ScrollMagic.Controller();
        $("main section").map((i, v) => {


            var ourScene = new ScrollMagic.Scene({
                    triggerElement: `#${v.id}`,
                    triggerHook: 1
                })
                .setClassToggle(`#${v.id}`, 'come-in') // add class
                .addTo(controller);
        });
    });
};