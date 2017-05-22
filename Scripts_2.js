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
            $("<p>Under holy judgement, a trial is being held, a trial that only the most desperate of prisoner would wish for: a 'Trial by Champion'.</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 2000);

        setTimeout(function () {
            $("<p id='continue_Dots'>...</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 3000);

        setTimeout(function () {
            $("<p>You are thrown down a trapdoor, a pile of hay broke your fall. The only light here is coming from above.</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 4000);

        setTimeout(function () {
            $('<p>"Good luck," said the warden.</p>').hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 6000);

        setTimeout(function () {
            $('<p>"Screw off."</p>').hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 7000);

        setTimeout(function () {
            $("<p>The warden closed the door.</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 8000);

        setTimeout(function () {
            $("<p id='continue_Dots'>...</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 9000);

        setTimeout(function () {
            $("<p>The room has become pitch black. What do you do?</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 10000);

        setTimeout(function () {
            $("<div class='radio_Choices' id='alex_Room_Search_1'<br>Search the room</div>" +
                "<div class='radio_Choices' id='alex_Find_Door_1'<br>Find an exit</div>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 12000);

    });
});

$(document).ready(function(){
    $(document).one('click', '#alex_Room_Search_1', function() {

        $("#div_Chat_Log_Text").fadeOut(500, function() {
            $("#div_Chat_Log_Text").empty().show();
        });

        setTimeout(function () {
            $("<p>You move your hands back and forth, feeling nothing but cobblestone and hay.</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 1000);

        setTimeout(function () {
            $("<p>'This is pointless', you thought. 'I\'m going to die in this maze. But before that I must kill that witch.'</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 2000);

        setTimeout(function () {
            $("<div class='radio_Choices' id='alex_Room_Search_2'<br>Search the room</div>" +
                "<div class='radio_Choices' id='alex_Find_Door_1'<br>Find an exit</div>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 3000);

    });
});

$(document).ready(function(){
    $(document).one('click', '#alex_Room_Search_2', function() {

        $("#div_Chat_Log_Text").fadeOut(500, function() {
            $("#div_Chat_Log_Text").empty().show();
        });

        setTimeout(function () {
            $("<p>A wood pole is what you find at the corner of the room. There seems to be charcoal tied to the top of it.</p>").hide().appendTo("#div_Chat_Log_Text").fadeIn(1000);
        }, 1000);

        setTimeout(function () {
            $("<p>Torch</p>").hide().appendTo("#div_Inventory_Text").fadeIn(1000);
        }, 1500);

        setTimeout(function () {
            $("<p>1</p>").hide().appendTo("#div_Inventory_Value_Text").fadeIn(1000);
        }, 2000);


    });
});