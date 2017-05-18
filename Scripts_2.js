/**
 * Created by 17svo on 5/18/2017. ALEXANDRE
 */
$(document).ready(function(){
    $(document).one('click', '#Alexandre_Select', function() {
        $("#div_Chat_Log_Text").empty();

        setTimeout(function () {
            $("#div_Chat_Log_Text").append("<div id='div_Chat_Log_Text_Title'></div>");
        }, 0);

        $("#div_Chapter_TEXT").text("Chapter 1: Alexandre");

        setTimeout(function () {
            $("<span>Chapter 1: </span>").hide().appendTo("#div_Chat_Log_Text_Title").fadeIn(1000); /*This append has hide??? */
        }, 1);

        setTimeout(function () {
            $("<span>Alexandre</span>").hide().appendTo("#div_Chat_Log_Text_Title").fadeIn(1000);
        }, 1000);

        setTimeout(function () {
            $("<hr>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 1700);

        setTimeout(function () {
            $("<p> INSERT TEXT HERE TEST</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 2000);

    });
});