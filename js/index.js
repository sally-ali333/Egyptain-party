
let x = $("aside .menu").innerWidth();
$("aside").css("left", -x);

$("aside .openIcon").click(function () {
    if ($("aside").css("left") == '0px') {
        $("aside").animate({ left: -x }, 1000);
    } else {
        $("aside").animate({ left: '0px' }, 1000);
    }
});




$("#closeBtn").click(function () {
    $("aside").animate({ left: -x }, 1000);
});



$(window).scroll(function () {
    let detOffset = $("#details").offset().top;
    let windOffset = $(window).scrollTop();
    if (windOffset > detOffset - 20) {
        $(".openIcon").css("display", "none")
    } else {
        $(".openIcon").css("display", "block")
    }
})


$(".menu a").click(function (e) {
    let id = $(e.target).attr("href");
    if ($(id).offset() != undefined) {
        let x = $(id).offset().top;
        $("html , body").animate({ scrollTop: x }, 400);
    }
})


let header = $("#details h3");
for (let i = 0; i < header.length; i++) {
    header.eq(i).click(function () {
        header.eq(i).next().slideToggle(400)
    })
}


function countdown() {
    var now = new Date();
    var eventDate = new Date(2023, 3, 21);

    var current = now.getTime();
    var event = eventDate.getTime();

    var remaingTime = event - current;

    var s = Math.floor(remaingTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $("#day h3").html(`${d}D`)
    $("#hour h3").html(`${h}h`)
    $("#minute h3").html(`${m}m`)
    $("#sec h3").html(`${s}s`)

    setTimeout(countdown, 1000);
}

countdown()


$("textarea").keyup(function () {
    const max = 100;
    let charNum = $(this).val().length;
    let x = max - charNum;
    if (x <= 0) {
        $("#num").text("your available characters finished").css("color", "red");
    } else {
        $("#num").text(`${x} remaining characters`).css("color", "#333");
    }
});
