$(document).ready(function(){
    $("#btn2").click(function(){
        $("#btn1").removeClass("selected")
        $("#btn1").addClass("unselected")
        $("#btn3").removeClass("selected")
        $("#btn3").addClass("unselected")
        $("#btn2").removeClass("unselected")
        $("#btn2").addClass("selected")
        $("#me").fadeIn("fast")
        $("#projects").hide()
        $("#work").hide()
        //$("#header").css("background-color", "#81e1e3");
        $("#header").animate({backgroundColor: "#81e1e3"});
    });
    $("#btn1").click(function(){
        $("#btn2").removeClass("selected")
        $("#btn2").addClass("unselected")
        $("#btn3").removeClass("selected")
        $("#btn3").addClass("unselected")
        $("#btn1").removeClass("unselected")
        $("#btn1").addClass("selected")
        //$("#header").css("background-color", "#84e381");
        $("#header").animate({backgroundColor: "#84e381"});
        $("#work").fadeIn("fast")
        $("#projects").hide()
        $("#me").hide()
    });
    $("#btn3").click(function(){
        $("#btn2").removeClass("selected")
        $("#btn2").addClass("unselected")
        $("#btn1").removeClass("selected")
        $("#btn1").addClass("unselected")
        $("#btn3").removeClass("unselected")
        $("#btn3").addClass("selected")
        $("#projects").fadeIn("fast")
        $("#me").hide()
        $("#work").hide()
        //$("#header").css("background-color", "#c581e3");
        $("#header").animate({backgroundColor: "#c581e3"});
        
    }); 
});
