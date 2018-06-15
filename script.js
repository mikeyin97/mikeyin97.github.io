function typeWriter(text, n) {
    if (n < (text.length)) {
        $('.title').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            typeWriter(text, n)
        }, 40);
    }
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
    $('#ImageMap1').maphilight();

    var text = $('.title').data('text');
    typeWriter(text, 0);

    $( "area" ).click(function() {
        changeText(this.id);
    });
    $('.tab').click(function(){
        
        var $this = $(this);
        console.log($this.html().slice(0));
        if ($this.hasClass("active")== false){
            $this.parent().find('.active').removeClass('active');
            $this.addClass('active');
            var $text = document.getElementById($this.html().slice(0));
            console.log($text);
            var element = $("body").find(".visible");
            element.removeClass("visible");
            var element = $("body").find(".show");
            element.removeClass("show");
            $text.classList.add('visible');
        }
        
        

        //need to mobilize this


    });
});

