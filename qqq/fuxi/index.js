requirejs(["require.js", "carousel"], function($, Carousel){
    var imgs1 = ["img/1.jpg", "img/2.jpg","img/3.jpg","img/4.jpg"];
    var setting1 = {
        selector : "#container",
        imgArr : imgs1,
        speed : 500,
        buttonStyle : "square",//circle
        arrowsPos : "bottom"//center
    };

    var carousel1 = new Carousel(setting1);
    carousel1.init();


});