// click done
// hide done
// show done
// toggle done
// slideDown done
// slideUp done
// fadeIn done
// fadeOut done
// addClass done
// before done
// after done
// append done
// html done
// attr done
// val done
// text done


// $(document).ready(function(){
//     $('#classButton').click(function(){
//         $('.first-p').addClass('red');
//     });
// });

$(function(){
    
    // addClass
    $('#addClassButton').click(function(){
        $('#first-p').addClass('red');
    });

    // removeClass
    $('#removeClassButton').click(function(){
        $('#second-p').removeClass('red');
    });

    // append
    $('#append-button').click(function(){
        $('#append-div').append('<p>You just added this to my page!</p>');
    });

    // slideToggle
    $('#img-button').click(function(){
        $('#holly-one').slideToggle("slow");
    });

    // fadeIn
    $('#fade-in-button').click(function(){
        $('#holly-two').fadeIn();
    });

    // fadeOut
    $('#fade-out-button').click(function(){
        $('#holly-three').fadeOut();
    });

    // toggle
    $('#toggle-button').click(function(){
        $('#toggle-img').toggle();
    });

    // hide
    $('#hide-button').click(function(){
        $('#hide-me').hide();
    })

    // show
    $('#show-button').click(function(){
        $('#show-me').show();
    })

    // HTML
    $('#html-button').click(function(){
        $('#h1').html("You did this!");
    });

    // before
    $('#before-button').click(function(){
        $('#before-p').before("<h1>You did it!</h1>");
    });

    // after
    $('#after-button').click(function(){
        $('#after-p').after("<h1>Nice one!</h1>");
    });

    // attr
    $('#attr-button').click(function(){
        $('#attr-p').attr('style', 'display: none;');
        $('#attr-h1').after("<p>Nice! That one's hidden now!</p>")
    });

    // val
    $('#val-button').click(function(){
        $('#email').val("I don't need your email!");
    });

    // test
    $('#text-button').click(function(){
        $('#text-p').text("You changed me!");
    });
})