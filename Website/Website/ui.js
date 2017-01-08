
$(document).ready(function(){
    var i = 1;
    $("#but1").click(function(){
        $("#panel1").toggle();
    });
    $("#but2").click(function(){
        $("#panel2").toggle();
    });
    $("#but3").click(function(){
        $("#panel3").toggle();
    });
    $("#but4").click(function(){
        $("#panel4").toggle();
    });
    $("#but5").click(function(){
        $("#panel5").toggle();
    });
    
    $("#submitbutton").click(function(){
        var comment = $('#textarea').val();
        $('#posts').prepend('<button class="accord" id = "but6">' + comment + '</button><div class="panel" id = "panel6"><div class = "comment2"><textarea class = "comments" rows="2" cols="56" name="aboutyou" placeholder=" Provide a response!"></textarea><input type="submit" value="Submit" id = "submitbutton2"> </div></div>');
        $("#but6").click(function(){
        $("#panel6").toggle();
    });
   
    });
    
     $("#submitbutton2").click(function(){
        var comment2 = $('#commenter').val();
        $("#rando").append('<div class = "comment">' + comment2 + '</div>');
    });    
    
    $("#chatsubmit").click(function(){
        var value = $('#msg').val();
        var check = 1;
        //alert(value);
        if ((value.toLowerCase() == "hi")||(value.toLowerCase() == "hello")||(value.toLowerCase() == "hey")||(value.toLowerCase() == "hi!")||(value.toLowerCase() == "hello!")||(value.toLowerCase() == "hey!")){
            check = 0;
        }
        if (i == 1){
            if (check == 0){
            $("#message1").text(value);
            $("#message1").css("color", "black");
            }
            else {
            $("#message1").text(value);
            $("#message1").css("color", "black"); 
            }
            
            if (check == 0){
            setTimeout(function(){
  $("#message2").css("color", "black");
}, 1000);
            i+=1;
                //alert(i);
        }
            
            else {
            setTimeout(function(){
                $("#message2").text("idk");
  $("#message2").css("color", "black");
}, 1000);
            i+=1;
        } 
            
            }
        else{
            //alert(value);
            //alert(check);
            //alert(i);
            
            $("#message3").text(value);
            $("#message3").css("color", "black");
            setTimeout(function(){
  $("#message4").css("color", "black");
}, 2000);
            $("#myform")[0].reset();
        }
    });
});