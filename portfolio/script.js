function typeWriter(text, n) {
    if (n < (text.length)) {
        $('.title').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            typeWriter(text, n)
        }, 40);
    }
}

function typeWriter2(text, n, cb) {
    if (n < (text.length)) {
        $('#projectname').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            typeWriter2(text, n)
        }, 40);
    }
}

function waittype(text, n, cb){
    typeWriter2()
    
}

function changeText(clicked){
    $(".textbox").hide();
    $("#"+clicked+"txt").show();
    var text = $("#"+clicked+"title").data('text');
    typeWriter(text, 0);
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    return h;
}

$(document).ready(function(){
    $('#Biosensor Development').fadeIn();
    var text = $('.title').data('text');
    typeWriter(text, 0);

    $('.tab').click(function(){
        $('#test').fadeOut(200);
        $("#Initial").css("display","none");
        var $this = $(this);
        if ($this.hasClass("active")== false){
            $(".bodytext1").css("display","none");
            $this.parent().find('.active').removeClass('active');
            $this.addClass('active');
            var $text = document.getElementById($this.html().slice(0));
           
            typeWriter2($this.html(), 0);
            console.log($this.html())
            if ($this.html() == 'Pong/Gomoku Controller'){
                setTimeout(function(){$(".bodytext1").css("display","block")},1000);
            }
            
        }
        
        
        

        //need to mobilize this


    });
});

