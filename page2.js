let allNotes = [
    "do.m4a",
    "doSharp.m4a",
    "re.m4a",
    "reSharp.m4a",
    "mi.m4a",
    "fa.m4a",
    "faSharp.m4a",
    "sol.m4a",
    "solSharp.m4a",
    "la.m4a",
    "laSharp.m4a",
    "si.m4a"
]

let noteNmb;

//we detect if the player click on the right key to play the according song
$("html").on("keydown", event => {
    let audio = new Audio();
    switch (event.keyCode){
        case 81:
            audio.src = allNotes[0];
            audio.play();
            break;
        case 90:
            audio.src = allNotes[1];
            audio.play();
            break;
        case 83:
            audio.src = allNotes[2];
            audio.play();
            break;
        case 69:
            audio.src = allNotes[3];
            audio.play();
            break;
        case 68:
            audio.src = allNotes[4];
            audio.play();
            break;
        case 70:
            audio.src = allNotes[5];
            audio.play();
            break;
        case 84:
            audio.src = allNotes[6];
            audio.play();
            break;
        case 71:
            audio.src = allNotes[7];
            audio.play();
            break;
        case 89:
            audio.src = allNotes[8];
            audio.play();
            break;
        case 72:
            audio.src = allNotes[9];
            audio.play();
            break;
        case 85:
            audio.src = allNotes[10];
            audio.play();
            break;
        case 74:
            audio.src = allNotes[11];
            audio.play();
            break;
    }
});

//we detect if the player click on the black notes to play them
$(".blackNotes").on("click", () => {
    let audio = new Audio();
    switch (noteNmb){
        case 2:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 4:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 7:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 9:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 11:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
    }
});

//we detetect if the player hit the white notes to play them
$(".whiteNotes").on("click", () => {
    let audio = new Audio();
    switch (noteNmb){
        case 1:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 3:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 5:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 6:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 8:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 10:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
        case 12:
            audio.src = allNotes[noteNmb - 1];
            audio.play();
            break;
    }
});