
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mouseover",function(sym,e){sym.play("in");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mouseout",function(sym,e){sym.play("out");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-121035658");