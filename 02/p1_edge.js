/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'products_main',
                type: 'image',
                rect: ['0px', '0px','640px','640px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"products_main.jpg",'0px','0px']
            },
            {
                id: 'products-1-o',
                type: 'image',
                rect: ['0px', '0px','640px','640px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"products-1-o.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '640px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
            ],
            "${_products-1-o}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_products_main}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "in": 0,
                "out": 250
            },
            timeline: [
                { id: "eid3", tween: [ "style", "${_products-1-o}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "style", "${_products-1-o}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-121035658");
