function typeWriter(text, n) {
    if (n < (text.length)) {
        $('.test').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            typeWriter(text, n)
        }, 75);
    }
}

$(document).ready(function(){
    var text = $('.test').data('text');
    typeWriter(text, 0);
   
    $(".righttext").css("display", "inline");
    
   
    
    $('.tab').click(function(){
        
        var $this = $(this);
        if ($this.hasClass("active")== false){
            $this.parent().find('.active').removeClass('active');
            $this.addClass('active');
            console.log($this.html().slice(2));
            var $text = document.getElementById($this.html().slice(2));
            console.log($text)
            var element = $("body").find(".visible");
            element.removeClass("visible");
            var element = $("body").find(".show");
            element.removeClass("show");
            $text.classList.add('visible');
        }
        //need to mobilize this


    });

    $('.toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
        }


    });

});

