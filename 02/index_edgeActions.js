/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_p1}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p1").play("in");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p1}", "mouseout", function(sym, e) {
         // マウスがオブジェクトから離れたときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p1").play("out");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p2").play("in");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2}", "mouseout", function(sym, e) {
         // マウスがオブジェクトから離れたときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p2").play("out");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p3}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p3").play("in");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p3}", "mouseout", function(sym, e) {
         // マウスがオブジェクトから離れたときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p3").play("out");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p4").play("in");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4}", "mouseout", function(sym, e) {
         // マウスがオブジェクトから離れたときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.getSymbol("p4").play("out");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'p1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_products-1-o}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

   })("p1");
   //Edge symbol end:'p1'

   //=========================================================
   
   //Edge symbol: 'p2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

   })("p2");
   //Edge symbol end:'p2'

   //=========================================================
   
   //Edge symbol: 'p3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

   })("p3");
   //Edge symbol end:'p3'

   //=========================================================
   
   //Edge symbol: 'p4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

   })("p4");
   //Edge symbol end:'p4'

})(jQuery, AdobeEdge, "EDGE-118146016");