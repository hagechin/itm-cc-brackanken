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
                id: 'p1',
                type: 'rect',
                rect: ['0px', '1373','auto','auto','auto', 'auto']
            },
            {
                id: 'p2',
                type: 'rect',
                rect: ['640', '1373','auto','auto','auto', 'auto']
            },
            {
                id: 'p3',
                type: 'rect',
                rect: ['960', '1373','auto','auto','auto', 'auto']
            },
            {
                id: 'p4',
                type: 'rect',
                rect: ['640', '1693','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'p2',
                symbolName: 'p2',
                autoPlay: {

                }
            },
            {
                id: 'p3',
                symbolName: 'p3',
                autoPlay: {

                }
            },
            {
                id: 'p4',
                symbolName: 'p4',
                autoPlay: {

                }
            },
            {
                id: 'p1',
                symbolName: 'p1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_p4}": [
                ["style", "left", '643px'],
                ["style", "top", '1685px']
            ],
            "${_p1}": [
                ["style", "top", '1365px'],
                ["style", "right", ''],
                ["style", "left", '3px']
            ],
            "${_p2}": [
                ["style", "top", '1365px'],
                ["style", "left", '643px']
            ],
            "${_p3}": [
                ["style", "top", '1365px'],
                ["style", "left", '963px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "style", "${_p4}", "left", '643px', { fromValue: '643px'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_p1}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_p1}", "top", '1365px', { fromValue: '1365px'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_p2}", "top", '1365px', { fromValue: '1365px'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_p4}", "top", '1685px', { fromValue: '1685px'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_p3}", "left", '963px', { fromValue: '963px'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_p3}", "top", '1365px', { fromValue: '1365px'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_p2}", "left", '643px', { fromValue: '643px'}], position: 0, duration: 0 },
                { id: "eid1", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_p3}', [] ], ""], position: 0 },
                { id: "eid2", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_p2}', [] ], ""], position: 0 },
                { id: "eid3", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_p1}', [] ], ""], position: 0 },
                { id: "eid11", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_p4}', [] ], ""], position: 0 }            ]
        }
    }
},
"p1": {
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
                    type: 'image',
                    id: 'products-1-o',
                    opacity: 1,
                    rect: ['8px', '8px', '640px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/products-1-o.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_products-1-o}": [
                ["style", "top", '8px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "in": 0,
                "out": 500
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_products-1-o}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid10", tween: [ "style", "${_products-1-o}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"p2": {
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
                    type: 'image',
                    id: 'products-2-o',
                    opacity: 0,
                    rect: ['8px', '8px', '320px', '320px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/products-2-o.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_products-2-o}": [
                ["style", "top", '8px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '320px'],
                ["style", "width", '320px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "in": 0,
                "out": 500
            },
            timeline: [
                { id: "eid36", tween: [ "style", "${_products-2-o}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid37", tween: [ "style", "${_products-2-o}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"p3": {
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
                    rect: ['8px', '8px', '320px', '320px', 'auto', 'auto'],
                    id: 'products-3-o',
                    opacity: 0,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/products-3-o.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_products-3-o}": [
                ["style", "top", '8px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '320px'],
                ["style", "width", '320px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "in": 0,
                "out": 500
            },
            timeline: [
                { id: "eid39", tween: [ "style", "${_products-3-o}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid40", tween: [ "style", "${_products-3-o}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"p4": {
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
                    id: 'products-4-o',
                    type: 'image',
                    rect: ['8px', '8px', '320px', '320px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/products-4-o.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_products-4-o}": [
                ["style", "top", '8px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '320px'],
                ["style", "width", '320px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "in": 0,
                "out": 500
            },
            timeline: [
                { id: "eid43", tween: [ "style", "${_products-4-o}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid44", tween: [ "style", "${_products-4-o}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-118146016");
