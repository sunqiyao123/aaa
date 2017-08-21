/**
 * Created by sunqiyao on 2017/8/21.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery", "login1"], function($, Dialog){
    $("#btn").on("click", function(){
        /*var setting = {
         width: 400,
         height : 300,
         title : "登录",
         content : "login.html"
         };
         dialog.open(setting);*/
        var setting = {
            width: 400,
            height : 300,
            title : "登录",
            content : "login.html"
        };
        var dialog = new Dialog(setting);
        dialog.open();
    });
});