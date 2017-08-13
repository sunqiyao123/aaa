
(function(){
    var oProduct = document.getElementById("product");
    var aAdd = oProduct.getElementsByTagName("button");
    var aSpan = oProduct.getElementsByTagName("span");
    var aPrice = [];
    var aNum = oProduct.getElementsByTagName("input");
    var oTotalPrice = document.getElementById("total-price");
    var oTotalNum = document.getElementById("total-number");
    var oClearCart = document.getElementById("c");
    for(var i=0; i<aSpan.length; i++){
        if(aSpan[i].className == "price"){
            aPrice.push(aSpan[i]);
            //console.log(aPrice);
        }
    }
    for(var i=0; i<aAdd.length; i++){
        aAdd[i].index = i;

        aAdd[i].onclick = function(){
            console.log(aPrice[this.index].innerHTML);
            console.log(aNum[this.index].value);
            oTotalPrice.innerHTML = parseFloat(oTotalPrice.innerHTML) +  aPrice[this.index].innerHTML * aNum[this.index].value;
            oTotalNum.innerHTML= parseInt(oTotalNum.innerHTML) + parseInt(aNum[this.index].value);
        };
    }
    oClearCart.onclick = function(){
        oTotalPrice.innerHTML = "0.00";
        oTotalNum.innerHTML = "0";
    };
})();





