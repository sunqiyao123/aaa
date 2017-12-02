(function(){
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImg = oSmallPic.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var aBigImg = oBigPic.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var oSingle=document.getElementById("single");
    var aWrapper=oSingle.getElementsByClassName("wrapper")[0];
    var nowIndex = 0;
    for(var i=0; i<aSmallImg.length; i++){
        aSmallImg[i].index = i;
        aSmallImg[i].onclick = function(){
            nowIndex = this.index;
            changeImg();
        };
    }
    oLeft.onclick = oRight.onclick = function(){
        if(this === oRight){
            nowIndex++;//0 1 2 3
            if(nowIndex == aSmallImg.length){
                nowIndex = 0;
            }
        }else{
            nowIndex--;
            if(nowIndex == -1){
                nowIndex = aSmallImg.length - 1;
            }
        }
        changeImg();
    };
    function changeImg() {
        aBigImg.src = aSmallImg[nowIndex].src;
        for (var i = 0; i < aSmallImg.length; i++) {
            aSmallImg[i].className = "";
        }
        aSmallImg[nowIndex].className = "selected";
        if (nowIndex == 0) {
           animate(oSmallPic,{
              left :0
           });
        } else {
           animate (oSmallPic,{
               left : -(aSmallImg[0].offsetWidth + 10)
           });
        }
    }
    var oDrag=document.getElementById("drag");
    var oMagnify=document.getElementById("magnify");
    var oMask=document.getElementById("mask");
    var oMagnifyImg=oMagnify.getElementsByTagName("img")[0];
    oMask.onmouseover=function(){
        oDrag.style.display="block";
        oMagnify.style.display="block";

    };
    oMask.onmouseout=function(){
        oDrag.style.display="none";
        oMagnify.style.display="none";
    };
    oMask.onmousemove=function(e) {
        e = e || window.event;
        var left = e.pageX - aWrapper.offsetLeft - oDrag.offsetWidth / 2;
        var top = e.pageY - oSingle.offsetTop - oDrag.offsetHeight / 2;
        if (top < 11){
            top = 11;
        }
        if (left < 6){
            left = 6;
        }
        var maxX =oBigPic .offsetWidth  - oDrag.offsetWidth-8;
        var maxY =oBigPic .offsetHeight  - oDrag.offsetHeight-7;
        if (left > maxX){
            left = maxX;
        }
        if (top > maxY){
            top = maxY;
        }
        oDrag.style.top= top+"px";
        oDrag.style.left= left+"px";
        var scaleX=left/maxX;
        var scaleY=top/maxY;
        oMagnifyImg.style.left=-scaleX*(oMagnifyImg.offsetWidth-oMagnify.offsetWidth)+"px";
        oMagnifyImg.style.top=-scaleY*(oMagnifyImg.offsetHeight-oMagnify.offsetHeight)+"px";
    };
})();

