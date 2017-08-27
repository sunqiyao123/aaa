/**
 * Created by APPLE on 2017/7/11.
 */
(function(){
    var oClose=document.getElementsByClassName("close");
    var oCartDetail=document.getElementsByClassName("cart-detail");
    var oCartMine=document.getElementById("cart-mine");
    var oH2=document.getElementById("num");
    for(var i=0;i<oClose.length;i++){
        oClose[i].index=i;
        console.log(oH2.innerHTML);
        oClose[i].onclick=function(){
            oCartMine.removeChild(oCartDetail[this.index]);
            for(var i=0;i<oClose.length;i++){
                oClose[i].index=i;
            }
            if(oH2!=0){
                oH2.innerHTML--;
            }else{
                oH2.innerHTML=0;
            }
        };
    }
})();