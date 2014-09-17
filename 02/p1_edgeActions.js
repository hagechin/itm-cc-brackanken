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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_products-1-o}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.play("in");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_products-1-o}", "mouseout", function(sym, e) {
         // マウスがオブジェクトから離れたときに実行されるコードを挿入します
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-121035658");