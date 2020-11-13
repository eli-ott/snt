//we remove the loading animation when the page is load
$(window).ready(function(){
    $("#loader1").fadeOut(500);
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
