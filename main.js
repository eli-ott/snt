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