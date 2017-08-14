/**
 * Created by sunqiyao on 2017/8/13.
 */
$(function(){
    $(":input").focus(function(){
        $(this).addClass("focus").val(this.value==this.defaultValue?"":this.value);
    }).blur(function(){
        $(this).removeClass("focus").val(this.value==""?this.defaultValue:this.value);
    });
});