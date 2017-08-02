/**
 * Created by APPLE on 2017/7/4.
 */
(function(){
     var oChoose=document.getElementById("choose");
     var aClassify=oChoose.getElementsByClassName("classify");
     var aSub=oChoose.getElementsByClassName("sub");
     var oImg=oChoose.getElementsByClassName("bottom");
     for(var i=0;i<aClassify.length;i++){
         aClassify[i].index=i;
         aClassify[i].bFlag=false;
         aClassify[i].addEventListener("click",function(){

             if(this.bFlag) {
                 aSub[this.index] && animate(aSub[this.index], {
                     height: 0
                 });
                 oImg[this.index].src="../img/do.png";
             }
             else{
                 aSub[this.index]&&animate(aSub[this.index],{
                     height:280
                 });
                 oImg[this.index].src="../img/123.jpg";
             }
             this.bFlag=!this.bFlag;
         },false);
     }
})();