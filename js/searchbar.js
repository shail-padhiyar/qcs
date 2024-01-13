$('.searchbutton').on('click', function() {
    $('.search').toggleClass('expandright');
});

$("<span class='clearBtn'>&times;</span>").insertAfter(".textBox");

$(".clearBtn").click(function() {
    $(this)
        .prev(".textBox")
        .val("");

    $(this).removeClass("show");
});

$(document).on("input", ".textBox", function() {
    if ($(this).val() == "") {
        $(this)
            .next(".clearBtn")
            .removeClass("show");
    } else {
        $(this)
            .next(".clearBtn")
            .addClass("show");
    }
});