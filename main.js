//we create a loading animation
$(window).on("load", () => {
    console.log("loading" + new Date().getMilliseconds());
    $("head").prepend("<link rel='stylesheet' href='loader.css'>");
});

$(window).ready(() => {
    console.log("loaded" + new Date().getMilliseconds());
    $("head").find("link")[0].remove();
});

//display the menu when the button is clicked
$("#menu").on("click", () => {
    $("#menuContent").slideDown();
    $("#menu").css("display", "none");
});

//hide the menu when X is clicked
$("#back").on("click", () => {
    $("#menuContent").slideUp();
    $("#menu").css("display", "unset");
});
