/*function myFunction() {
    alert("Pick your character.");
    document.write('<P id="demo" class="center_me" onclick="myFunction2()">Press Me</P></div>');
    prompt("TEST");
}

function myFunction2() {
    document.write('<div id="Button"><P id="demo" onclick="myFunction()">Hello</P></div>')
    prompt("ALSO TESTING")
}*/




//function myFunction() {
//    var person = prompt("Please enter your name", "Son Vo");
//    if (person != null) {
//        document.getElementById("demo").innerHTML =
//            "Hello " + person + "! How are you today?";
//    }
//}

/*function coverFunctAnim() {
    document.write('<div id=slide><P id="coverFunctAnim" onclick="myFunction()">Hello</P></div>')
}*/

/*var animGo = 0

if (animGo = 1) {
    function

}*/

// Using multiple unit types within one animation.
setTimeout(function(){
$( "#Button" ).click(function() {
    $( "#top_animation_cover_pt1" ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
});

$( "#Button" ).click(function() {
    $( "#top_animation_cover_pt2" ).delay( 400 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
});

// Mini #top_animation_cover('s) below; Main #t_a_c('s) above. //

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt3" ).delay( 600 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt4" ).delay( 650 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt5" ).delay( 700 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt6" ).delay( 750 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt7" ).delay( 800 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt8" ).delay( 850 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt9" ).delay( 900 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt10" ).delay( 950 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt11" ).delay( 1000 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt12" ).delay( 1050 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt13" ).delay( 1100 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt14" ).delay( 1150 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt15" ).delay( 1200 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})

$ ( "#Button").click(function() {
    $( "#top_animation_cover_pt16" ).delay( 1250 ).animate({
        width: "100%",
        fontSize: "3em",
    }, 1500 );
})
}, 0);


// #top_animation_cover end //
//
// Side Note: the third div is not correctly position/sized compared to 4-13 due to some old div that's been removed
//
// //

/*
function coverFunctAnim() {
    //$('#div_Chat_Log_Text').append('<p id="div_Chat_Log_Text">Character Select;</p>');
    $('#div_Chat_Log_Text').append('C').delay(200).queue(function (next, next2) {
        $(this).append('h');
        next();
        $(this).append('a');
        next2();
    });
}
*/
/*
$(document).ready(function(){
    $('#div_Chat_Log_Text').append("Character Select.<br/>").afterTime(1000,function(){
        $('#div_Chat_Log_Text').append("...<br/>");
        $('#div_Chat_Log_Text').afterTime(1000,function(){
            $('#div_Chat_Log_Text').append("This will appear after 5 secs.");
        });
    });
});
*/
/*
function coverFunctAnim(){
    $("#Button").click(function(){
        $("#div_Chat_Log_Text").append('C').delay(200);
        $("#div_Chat_Log_Text").append('h').delay(400);
        $("#div_Chat_Log_Text").append('a').delay(800);
        $("#div_Chat_Log_Text").append('r').delay(2000);
        $("#div_Chat_Log_Text").append('a').delay(4000);
    });
});
*/
/*
function coverFunctAnim() {
    $("#div_Chat_Log_Text").append("C").setTimeout(coverFunctAnim, 3000);
}

setTimeout(function () {
    $("#user-comments").append('<div class="video_comment">
        <div class="name">David</div>
        <div class="time"><?php echo date('F j, Y, g:i a'); ?></div>
    <div class="indiv-comment"><p>' + message + '</p></div></div>');
}, 3000);*/

// function typeOutText(textToType,startTime,divToTypeIn) {
//
//
//     for (
//         var i = 0;  // initialize i to startTime
//         i < textToType.length; // define the value that cannot be reached
//         i = i + 1 // describe how we go from one step to the next
//     ) {
//
//         var letter = textToType.substring(i, i + 1);
//         var number = 200 * i + startTime;
//
//
//         $(divToTypeIn).delay( number ).append(letter);
//
//
//         // setTimeout(function coverFunctAnim() {
//         //     $(divToTypeIn).append(letter);
//         // }, number);
//     }
// }
//

var typeWords = function() {

    /* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA */
    /* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA */
    setTimeout(function coverFunctAnim() {
        /* not this */
        setTimeout(function coverFunctAnim() {
            $("#div_Chat_Log_Text").append("loading inventory_Div_Title");
        },3100);

        setTimeout(function coverFunctAnim() {
            $("#div_Chat_Log_Text").append("<br>");
        },3101);

        setTimeout(function coverFunctAnim() {
            $("#div_Chat_Log_Text").append("loading inventory_Map_Title");
        },3600);

        setTimeout(function coverFunctAnim() {
            $("#div_Chat_Log_Text").empty('body');
        },5000);
        /* not this */
    },0); /* Full Value */
    /* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA */
    /* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA *//* BRANCHING PROJECT IDEA */

setTimeout(function(){ /* Delay of the Chat_Log Variable */
    /* Chat_Log */
    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("C");
    }, 3300);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("h");
    }, 3500);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("a");
    }, 3700);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("r");
    }, 3900);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("a");
    }, 4100);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("c");
    }, 4300);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("t");
    }, 4500);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("e");
    }, 4700);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("r");
    }, 4900);

//
    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append(" ");
    }, 5100);
//

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("S");
    }, 5300);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("e");
    }, 5500);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("l");
    }, 5700);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("e");
    }, 5900);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("c");
    }, 6100);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("t");
    }, 6300);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append(":");
    }, 6500);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("<br>");
    }, 6500);

    setTimeout(function coverFunctAnim() {
        $("#div_Chat_Log_Text").append("<div class='Character_Select_Screen'>" +
            "" +
            "</div>");
    }, 7000);

    setTimeout(function coverFunctAnim() {
        $(".Character_Select_Screen").append("" +
            "<div class='Character_Select_Options' id='Scout_Select' onclick='Scout()'></div>" +
            "<div class='Character_Select_Options' id='Alexandre_Select'></div>" +
            "<div class='Character_Select_Options' id='Evee_Select' ></div>");
    }, 7100);



}, 3000); /* Delay of the Chat_Log Variable */
};

$(document).delegate('#Scout_Select', 'click', function()
{
    $("#div_Chat_Log_Text").empty();
    $("#div_Chat_Log_Text").append("<div id='div_Chat_Log_Text_Title'>Chapter 1: </div>");

    setTimeout(function () {
        setTimeout(function () {
            $("#div_Chat_Log_Text_Title").append("S");
        }, 300);

        setTimeout(function () {
            $("#div_Chat_Log_Text_Title").append("c");
        }, 600);

        setTimeout(function () {
            $("#div_Chat_Log_Text_Title").append("o");
        }, 900);

        setTimeout(function () {
            $("#div_Chat_Log_Text_Title").append("u");
        }, 1200);

        setTimeout(function () {
            $("#div_Chat_Log_Text_Title").append("t");
        }, 1500);

        setTimeout(function () {
            $("#div_Chat_Log_Text").append("<hr>");
        }, 1700);

        setTimeout(function () {
            $("#div_Chat_Log_Text").append("Under holy judgement, a trial is being held, a trial that only the most desperate of prisoner wish for: a Trial by Champion.");
        }, 2000);

        setTimeout(function () {
            $("#div_Chat_Log_Text").append("<div id='continue_Dots'>...</div>");
        }, 2000);

        /*SEPERATE????QUESTIONMARK?*/

        setTimeout(function () {
            $("#div_Chat_Log_Text").append("<br><br>");
        }, 3000);

        setTimeout(function () {
            $("#div_Chat_Log_Text").append("You are thrown down a trapdoor, a pile of hay broke your fall. The only light in this place came from above.<br>You sat in silence for a couple of seconds, bracing yourself for the trial. 'Good luck', said the warden as he shut the wooden door.");
        }, 4000);

    }, 0); /* Chapter Typing */
});


/*$('.div').append;
setTimeout(function() {
    $('.div').remove();
}, 3000);
*/

/*$(document).click(function(){
    $("#Button").click(function () {
        $("#TEST").animate({
            "background-color": "black"
        }, 2000);
    });
});*/

//
//

$( "#Button" ).click(function() {
    $( "#Button_Box" ).remove();
    $( "#Button" ).remove();
/*    setTimeout(
        function() {
            typeOutText("bdgtfhgfgdhdfgdgdf", 0, "#div_Chat_Log_Text");
        },
        3300
    );*/
    typeWords();
});