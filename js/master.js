$(document).ready(function() {
    var wh = $(window).height(),
        nh = $("nav").innerHeight();

    $(".slider .carousel-item ").height(wh - nh);

    $(".features-work ul li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === ".all") {
            $(".suffle-img .col-md").css("opacity", 1);
        } else {
            $(".suffle-img .col-md").css("opacity", ".07");
            $($(this).data("class")).parent().css("opacity", 1);
        }
    });
});

var x = document.querySelectorAll(".date");
var i;
for (i = 0; i < x.length; i++) {
    x[i].textContent = new Date();
}