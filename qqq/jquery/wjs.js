/**
 * Created by sunqiyao on 2017/8/13.
 */
$(function(){
        //搜索框
        $("#search").on("focus", function(){
            if(this.value == this.defaultValue){
                this.value = "";
            }
        }).on("blur", function() {
            if (this.value == "") {
                this.value = this.defaultValue;
            }
        });
        //前后滚动
        $("#brand1 li").on("click", function(){
            $(this).addClass("chos").siblings().removeClass("chos");
            $("#jn1").animate({
                left: -$("#jn1 li").innerWidth() * 4 * $(this).index()
            }, 1000);
        });
        //轮播图
        var $a=$("#roll9 a");
        var $img=$("#roll2 img");
        var nowIndex=0;
        $img.each(function(index,elem){
            $(elem).css({
                zIndex:5-index
            });
        });
        $a.on("mouseover",function(){
            nowIndex=$(this).index();
            img();
        });
        setInterval(function(){
            nowIndex++;
            if(nowIndex==$img.length){
                nowIndex=0;
            }
            img();
        },1000);
        function img(){
            $a.eq(nowIndex).addClass("chos").siblings().removeClass("chos");
            $img.eq(nowIndex).stop(false,true).fadeIn().siblings().stop(false,true).fadeOut();
        }
        //菜单
        $("#b li").hover(function(){
            $(this).children(".jnNav").show();
        }, function(){
            $(this).children(".jnNav").hide();
        });
        //超链接文字提示
        function tooltip(selector){

            $(selector).hover(function(e){
                this.tip = $(this).attr("title")?$(this).attr("title"):$(this).html();
                if($(".tip").length == 0){
                    var $tooltip = $("<div class='tip'></div>").html(this.tip);
                    $tooltip.appendTo($("body"));
                }else{
                    $(".tip").html(this.tip);
                }

                $(".tip").offset({
                    top: e.pageY + 10,
                    left: e.pageX + 10
                });

                $(this).removeAttr("title");
            }, function(){
                $(this).attr("title", this.tip);
                $(".tip").remove();
            }).on("mousemove", function(e){
                $(".tip").offset({
                    top: e.pageY + 10,
                    left: e.pageX + 10
                });
            });
        }
        tooltip("#roll5 li a");
        //换肤
        // if($.cookie("skin")){
        //     a($.cookie("skin"));
        // }
        // $(".skin li").on("click",function() {
        //     var skin = $(this).attr("id");
        //     $.cookie("skin", skin, {expires: 30});
        //     a(skin);
        // });
        // function a(skin){
        //     $("#"+skin).addClass("selected").siblings().removeClass("selected"); 
        //     $("#b").css("background-color", $("#cssfile").attr("href",skin+".css"));
        // }
    $(".skin li").on("click",function(){ 
        $(this).addClass("selected").siblings().removeClass("selected"); 
        $("#b").css("background-color", $("#cssfile").attr("href",$(this).attr("id")+".css")); 
    })



});