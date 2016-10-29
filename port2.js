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
    $("#right1").click(function(){
        var $active= $("#p1 .slides .active");
        if ( $('#p1 .active').attr('id') == "last1" ){
            $("#p1 #first1").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.next().addClass("active");
            $active.removeClass("active");
        }
    });
    $("#left1").click(function(){
        var $active= $("#p1 .slides .active")
        if ( $('#p1 .active').attr('id') == "first1" ){
            $("#p1 #last1").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.prev().addClass("active");
            $active.removeClass("active");
        } 
    });
    $("#right2").click(function(){
        var $active= $("#p2 .slides .active");
        if ( $('#p2 .active').attr('id') == "last2" ){
            $("#p2 #first2").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.next().addClass("active");
            $active.removeClass("active");
        }
    });
    $("#left2").click(function(){
        var $active= $("#p2 .slides .active")
        if ( $('p2 .active').attr('id') == "first2" ){
            $("#p2 #last2").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.prev().addClass("active");
            $active.removeClass("active");
        } 
    });
    $("#right3").click(function(){
        var $active= $("#p3 .slides .active");
        if ( $('#p3 .active').attr('id') == "last3" ){
            $("#p3 #first3").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.next().addClass("active");
            $active.removeClass("active");
        }
    });
    $("#left3").click(function(){
        var $active= $("#p3 .slides .active")
        if ( $('#p3 .active').attr('id') == "first3" ){
            $("#p3 #last3").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.prev().addClass("active");
            $active.removeClass("active");
        } 
    });
    $("#right4").click(function(){
        var $active= $("#p4 .slides .active");
        if ( $('#p4 .active').attr('id') == "last4" ){
            $("#p4 #first4").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.next().addClass("active");
            $active.removeClass("active");
        }
    });
    $("#left4").click(function(){
        var $active= $("#p4 .slides .active")
        if ( $('#p4 .active').attr('id') == "first4" ){
            $("#p4 #last4").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.prev().addClass("active");
            $active.removeClass("active");
        } 
    });
    $("#right5").click(function(){
        var $active= $("#p5 .slides .active");
        if ( $('#p5 .active').attr('id') == "last5" ){
            $("#p5 #first5").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.next().addClass("active");
            $active.removeClass("active");
        }
    });
    $("#left5").click(function(){
        var $active= $("#p5 .slides .active")
        if ( $('#p5 .active').attr('id') == "first5" ){
            $("#p5 #last5").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.prev().addClass("active");
            $active.removeClass("active");
        } 
    });
    $("#right6").click(function(){
        var $active= $("#p6 .slides .active");
        if ( $('#p6 .active').attr('id') == "last6" ){
            $("#p6 #first6").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.next().addClass("active");
            $active.removeClass("active");
        }
    });
    $("#left6").click(function(){
        var $active= $("#p6 .slides .active")
        if ( $('#p6 .active').attr('id') == "first6" ){
            $("#p6 #last6").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.prev().addClass("active");
            $active.removeClass("active");
        } 
    });
    $("#right7").click(function(){
        var $active= $("#p7 .slides .active");
        if ( $('#p7 .active').attr('id') == "last7" ){
            $("#p7 #first7").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.next().addClass("active");
            $active.removeClass("active");
        }
    });
    $("#left7").click(function(){
        var $active= $("#p7 .slides .active")
        if ( $('#p7 .active').attr('id') == "first7" ){
            $("#p7 #last7").addClass("active");
            $active.removeClass("active");
            }
        else{
            $active.prev().addClass("active");
            $active.removeClass("active");
        } 
    });


    $(window).scroll(function(){
		if ($(this).scrollTop() > 150) {
            $('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
