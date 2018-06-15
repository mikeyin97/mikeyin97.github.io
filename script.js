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
});

