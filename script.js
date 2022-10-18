let xbox = document.getElementById("Xbox");
let obox = document.getElementById("Obox");
let xboxIcon = document.getElementById("XboxIcon");
let oboxIcon = document.getElementById("OboxIcon");
const vsCpuBtn = document.getElementById("newGameCPU");
const vsPlayerBtn = document.getElementById("newGamePlayer");
let startWrapper = document.getElementById("startWrapper");



// Board Bindings
let boardWrapper = document.getElementById("boardWrapper");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let box = document.querySelectorAll(".box");
let board = [b1, b2, b3, b4, b5, b6, b7, b8, b9];




// Board Result Bindings
let oWinsTitle = document.getElementById("oWins");
let xWinsTitle = document.getElementById("xWins");

let turnImg1 = document.getElementById("turnImg1");
let turnImg2 = document.getElementById("turnImg2");

let xResultTitle = document.getElementById("xResultTitle");
let xResultDigits = document.getElementById("xResultDigits");

let tieResultTitle = document.getElementById("tieResultTitle");
let tieResultDigits = document.getElementById("tieResultDigits");

let oResultTitle = document.getElementById("oResultTitle");
let oResultDigits = document.getElementById("oResultDigits");



// Alert Bindings
const cpuLostOwins = document.getElementById("CPU_lost_o_wins_wrapper");
const cpuWinXwins = document.getElementById("CPU_win_x_wins_wrapper");
let playerVsplayerOwins = document.getElementById("playerVsplayerOwinsWrapper");
let playerVsplayerXwins = document.getElementById("playerVsplayerXwinsWrapper");
let restartGame = document.getElementById("restartGameWrapper");
let roundTied = document.getElementById("roundTiedWrapper");



// Button Bindings
const cpuLostOwins_QuitBtn = document.getElementById("cpuLostOwins_QuitBtn");
const cpuLostOwins_NextRoundBtn = document.getElementById("cpuLostOwins_NextRoundBtn");

const cpuWinXwins_QuitBtn = document.getElementById("cpuWinXwins_QuitBtn");
const cpuWinXwins_NextRoundBtn = document.getElementById("cpuWinXwins_NextRoundBtn");

const PlayervsPlayerOwins_QuitBtn = document.getElementById("Player1WinOwins_QuitBtn");
const PlayervsPlayerOwins_NextRoundBtn = document.getElementById("Player1WinOwins_NextRoundBtn");

const PlayervsPlayerXwins_QuitBtn = document.getElementById("Player2WinXwins_QuitBtn");
const PlayervsPlayerXwins_NextRoundBtn = document.getElementById("Player2WinXwins_NextRoundBtn");

const restartBtn = document.getElementById("restartButton");
const yesRestartBtn = document.querySelector(".yesRestartBtn");
const noCancelBtn = document.querySelector(".noCancelBtn");
const tieQuitBtn = document.getElementById("tieQuitBtn");
const tieRoundBtn = document.getElementById("tieRoundBtn");


// General Declarations
let count = 0;
let displayTie = 0;
let displayXwin = 0;
let displayOwin = 0;
let xWinValue = 0;
let oWinValue = 0;
tieResultDigits.textContent = displayTie;
xResultDigits.textContent = displayXwin;
oResultDigits.textContent = displayOwin;
xResultTitle.innerHTML = "X (P2)"
oResultTitle.innerHTML = "O (P1)"
let flag;
let player1;
let player2;
let cpu;

// 1 = X
// 2 = O




// User Preference functions - Determine Player1 is X or O
function userChooseX() {
    xbox.addEventListener("click", function () {
        xbox.style.backgroundColor = "#A8BFC9";
        xbox.style.borderRadius = "10px";
        xboxIcon.style.filter = "brightness(10%)";
        obox.style.backgroundColor = "#1A2A33";
        oboxIcon.style.filter = "grayscale(100%)";

        xResultTitle.innerHTML = "X (P1)"
        oResultTitle.innerHTML = "O (P2)"

        displayTie = 0;
        displayOwin = 0;
        displayXwin = 0;
        xWinValue = 0;
        oWinValue = 0;
        count = 0;

        xWinsTitle.textContent = "YOU WON!";
        oWinsTitle.textContent = "OH NO, YOU LOST…";
        player1 = 1;
        player2 = 2;
        cpu = 2;
        console.log(player1);
    });
}
function userChooseO() {
    obox.addEventListener("click", function () {
        obox.style.backgroundColor = "#A8BFC9";
        obox.style.borderRadius = "10px";
        oboxIcon.style.filter = "brightness(10%)";
        xbox.style.backgroundColor = "#1A2A33";
        xboxIcon.style.filter = "grayscale(100%)";

        xResultTitle.innerHTML = "X (P2)"
        oResultTitle.innerHTML = "O (P1)"

        displayTie = 0;
        displayOwin = 0;
        displayXwin = 0;
        xWinValue = 0;
        oWinValue = 0;
        count = 0;

        xWinsTitle.textContent = "OH NO, YOU LOST…";
        oWinsTitle.textContent = "YOU WON!";
        player1 = 2;
        player2 = 1;
        cpu = 1;
        console.log(player1);

    });
}
userChooseX();
userChooseO();



// Player VS Player Gameflow Function - Player1 = X
function p1XpVSp() {
    startWrapper.style.display = "none";
    boardWrapper.style.display = "flex";

    // Alert Buttons
    function tieQuitButton() {
        tieQuitBtn.addEventListener("click", function () {
            roundTied.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            displayTie = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        });
    };
    function tieRoundButton() {
        tieRoundBtn.addEventListener("click", function () {
            roundTied.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            xoroTurn();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        });
    };

    function yesRestartButton() {
        yesRestartBtn.addEventListener("click", function () {
            restartGame.style.display = "none"
            startWrapper.style.display = "block";
            boardWrapper.style.display = "none";
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            count = 0;
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        });
    };
    function noCancelButton() {
        noCancelBtn.addEventListener("click", function () {
            xWinValue = 0;
            oWinValue = 0;
            restartGame.style.display = "none"
        });
    };

    function pVSpXwin_quit() {
        PlayervsPlayerXwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSpXwin_nextRound() {
        PlayervsPlayerXwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            count = 0;
            xWinValue = 0;
            oWinValue = 0;
            boardReset();
            xoroTurn();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }

    function pVSpOwin_quit() {
        PlayervsPlayerOwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSpOwin_nextRound() {
        PlayervsPlayerOwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            xoroTurn();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }


    // Alert Functions
    function counterForTie() {
        count += 1;
        if (count === 9) {
            gameTieFunction();
        };
    }
    function restartGameFunction() {
        restartBtn.addEventListener("click", function () {
            restartGame.style.display = "flex"
            noCancelButton();
            yesRestartButton();
        });
    };
    function xWins() {
        playerVsplayerXwins.style.display = "flex";
        xResultDigits.textContent = displayXwin += 1;
        pVSpXwin_quit();
        pVSpXwin_nextRound();
    }
    function oWins() {
        playerVsplayerOwins.style.display = "flex";
        oResultDigits.textContent = displayOwin += 1;
        pVSpOwin_quit();
        pVSpOwin_nextRound();
    }
    restartGameFunction();


    // Player vs Player - Win Check function 
    function winChecker() {
        if (b1.value == 1 && b2.value == 1 && b3.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b2.style.backgroundColor = "#31c3bd";
            b3.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b4.value == 1 && b5.value == 1 && b6.value == 1) {
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b7.value == 1 && b8.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b1.value == 1 && b4.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b4.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b2.value == 1 && b5.value == 1 && b8.value == 1) {
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b3.value == 1 && b6.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b1.value == 1 && b5.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b3.value == 1 && b5.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
    
    
        if (b1.value == 2 && b2.value == 2 && b3.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b2.style.backgroundColor = "#f2b137";
            b3.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b4.value == 2 && b5.value == 2 && b6.value == 2) {
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b7.value == 2 && b8.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b1.value == 2 && b4.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b4.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b2.value == 2 && b5.value == 2 && b8.value == 2) {
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b3.value == 2 && b6.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b1.value == 2 && b5.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b3.value == 2 && b5.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
    };

    function gameTieFunction() {
        if (xWinValue == 1) {
            return;
        };
        if (oWinValue == 1) {
            return;
        };
        displayTie += 1;
        tieResultDigits.textContent = displayTie;
        roundTied.style.display = "flex";
        count = 0;
        tieQuitButton();
        tieRoundButton();
    };

    // Player vs Player - X or O turn function 
    function xoroTurn() {
flag = 1;
count = 0;
b1.onclick = function b1Turn() {
if (flag == 1) {
    b1.value = 1;
    b1.innerHTML = '<img id="xIconWinb1" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b1.onclick = "return false";
    flag = 0;
}
else {
    b1.value = 2;
    b1.innerHTML = '<img id="oIconWinb1" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b1.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b2.onclick = function b2Turn() {
if (flag == 1) {
    b2.value = 1;
    b2.innerHTML = '<img id="xIconWinb2" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b2.onclick = "return false";
    flag = 0;
}
else {
    b2.value = 2;
    b2.innerHTML = '<img id="oIconWinb2" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b2.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b3.onclick = function b3Turn() {
if (flag == 1) {
    b3.value = 1;
    b3.innerHTML = '<img id="xIconWinb3" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b3.onclick = "return false";
    flag = 0;
}
else {
    b3.value = 2;
    b3.innerHTML = '<img id="oIconWinb3" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b3.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b4.onclick = function b4Turn() {
if (flag == 1) {
    b4.value = 1;
    b4.innerHTML = '<img id="xIconWinb4" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b4.onclick = "return false";
    flag = 0;
}
else {
    b4.value = 2;
    b4.innerHTML = '<img id="oIconWinb4" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b4.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b5.onclick = function b5Turn() {
if (flag == 1) {
    b5.value = 1;
    b5.innerHTML = '<img id="xIconWinb5" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b5.onclick = "return false";
    flag = 0;
}
else {
    b5.value = 2;
    b5.innerHTML = '<img id="oIconWinb5" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b5.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b6.onclick = function b6Turn() {
if (flag == 1) {
    b6.value = 1;
    b6.innerHTML = '<img id="xIconWinb6" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b6.onclick = "return false";
    flag = 0;
}
else {
    b6.value = 2;
    b6.innerHTML = '<img id="oIconWinb6" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b6.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b7.onclick = function b7Turn() {
if (flag == 1) {
    b7.value = 1;
    b7.innerHTML = '<img id="xIconWinb7" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b7.onclick = "return false";
    flag = 0;
}
else {
    b7.value = 2;
    b7.innerHTML = '<img id="oIconWinb7" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b7.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b8.onclick = function b8Turn() {
if (flag == 1) {
    b8.value = 1;
    b8.innerHTML = '<img id="xIconWinb8" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b8.onclick = "return false";
    flag = 0;
}
else {
    b8.value = 2;
    b8.innerHTML = '<img id="oIconWinb8" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b8.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b9.onclick = function b9Turn() {
if (flag == 1) {
    b9.value = 1;
    b9.innerHTML = '<img id="xIconWinb9" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b9.onclick = "return false";
    flag = 0;
}
else {
    b9.value = 2;
    b9.innerHTML = '<img id="oIconWinb9" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b9.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
};
    };

    // Game Board Reset
    function boardReset() {
b1.innerHTML = "";
b2.innerHTML = "";
b3.innerHTML = "";
b4.innerHTML = "";
b5.innerHTML = "";
b6.innerHTML = "";
b7.innerHTML = "";
b8.innerHTML = "";
b9.innerHTML = "";
b1.value = "";
b2.value = "";
b3.value = "";
b4.value = "";
b5.value = "";
b6.value = "";
b7.value = "";
b8.value = "";
b9.value = "";
b1.style.backgroundColor = "#1f3641";
b2.style.backgroundColor = "#1f3641";
b3.style.backgroundColor = "#1f3641";
b4.style.backgroundColor = "#1f3641";
b5.style.backgroundColor = "#1f3641";
b6.style.backgroundColor = "#1f3641";
b7.style.backgroundColor = "#1f3641";
b8.style.backgroundColor = "#1f3641";
b9.style.backgroundColor = "#1f3641";
count = 0;
    };
    
boardReset();
xoroTurn();
};



// Player VS CPU Gameflow Function - Player1 = X
function p1XpVScpu() {
    startWrapper.style.display = "none";
    boardWrapper.style.display = "flex";
    xResultTitle.innerHTML = "X (YOU)"
    oResultTitle.innerHTML = "O (CPU)"
    xWinValue = 0;
    oWinValue = 0;
    boardReset();
    player1 = 1;
    cpu = 2;
    function randomizer() {
        if (b1.value === 0) {
            b1ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else if (b2.value === 0) {
            b2ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else if (b3.value === 0) {
            b3ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else if (b4.value === 0) {
            b4ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else if (b5.value === 0) {
            b5ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else if (b6.value === 0) {
            b6ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else if (b7.value === 0) {
            b7ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else if (b8.value === 0) {
            b8ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
        else {
            b9ClickedO();
            count += 1;
            winOrTieCheck(); 
        }
    }
    function xGameLogic1() {
        b1.onclick = () => {
            if (b1.value === 0) {
                b1ClickedX();
                randomizer();
            }
        }
        b2.onclick = () => {
            if (b2.value === 0) {
                b2ClickedX();
                randomizer();
            }
        }
        b3.onclick = () => {
            if (b3.value === 0) {
                b3ClickedX();
                randomizer();
            }
        }
        b4.onclick = () => {
            if (b4.value === 0) {
                b4ClickedX();
                randomizer();
            }
        }
        b5.onclick = () => {
            if (b5.value === 0) {
                b5ClickedX();
                randomizer();                     
            } 
        }
        b6.onclick = () => {
            if (b6.value === 0) {
                b6ClickedX();
                randomizer();
            }
        }
        b7.onclick = () => {
            if (b7.value === 0) {
                b7ClickedX();
                randomizer();
            }
        }
        b8.onclick = () => {
            if (b8.value === 0) {
                b8ClickedX();
                randomizer();
            }
        }
        b9.onclick = () => {
            if (b9.value === 0) {
                b9ClickedX();
                randomizer();
            }
        }
    }
    xGameLogic1();


    // Alert Buttons
    function tieQuitButton() {
        tieQuitBtn.addEventListener("click", function () {
            roundTied.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            xWinValue = 0;
            oWinValue = 0;
            displayTie = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            urnImg2.style.display = "none";
        });
    };
    function tieRoundButton() {
        tieRoundBtn.addEventListener("click", function () {
        roundTied.style.display = "none";
        xWinValue = 0;
        oWinValue = 0;
        count = 0;
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        boardReset();
        xGameLogic1();
        });
    };

    function yesRestartButton() {
        yesRestartBtn.addEventListener("click", function () {
            restartGame.style.display = "none"
            startWrapper.style.display = "block";
            boardWrapper.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            count = 0;
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
            boardReset();
        });
    };
    function noCancelButton() {
        noCancelBtn.addEventListener("click", function () {
            restartGame.style.display = "none"
            xWinValue = 0;
            oWinValue = 0;
        });
    };

    function pVSCPUXwin_quit() {
        PlayervsPlayerXwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            xWinValue = 0;
            oWinValue = 0;
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSCPUXwin_nextRound() {
        PlayervsPlayerXwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
            boardReset();
            xGameLogic1();
        })
    }

    function pVSCPUOwin_quit() {
        PlayervsPlayerOwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            xWinValue = 0;
            oWinValue = 0;
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSCPUOwin_nextRound() {
        PlayervsPlayerOwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
            xGameLogic1();
        })
    }


    // Alert Functions
    function gameTieFunction() {
            if (xWinValue == 1) {
                return;
            };
            if (oWinValue == 1) {
                return;
            };
            displayTie += 1;
            tieResultDigits.textContent = displayTie;
            roundTied.style.display = "flex";
            count = 0;
            tieQuitButton();
            tieRoundButton();
    };
    function counterForTie() {
            count += 1;
            if (count === 9) {
                gameTieFunction();
            };
            if (count > 9) {
                gameTieFunction();
            };
    }
    function restartGameFunction() {
            restartBtn.addEventListener("click", function () {
                restartGame.style.display = "flex"
                noCancelButton();
                yesRestartButton();
            });
    };
    function xWinsCPU() {
        if (oWinValue == 1) {
            return;
        }
            playerVsplayerXwins.style.display = "flex";
            xResultDigits.textContent = displayXwin += 1;
            pVSCPUXwin_quit();
            pVSCPUXwin_nextRound();
    }
    function oWinsCPU() {
        if (xWinValue == 1) {
            return;
        }
            playerVsplayerOwins.style.display = "flex";
            oResultDigits.textContent = displayOwin += 1;
            pVSCPUOwin_quit();
            pVSCPUOwin_nextRound();
    }
    function winOrTieCheck() {
        winCheckerCPU();
        xWinsTitle.textContent = "YOU WON!";
        oWinsTitle.textContent = "OH NO, YOU LOST…";
        counterForTie(); 
    }
    restartGameFunction();


    // Game Board Reset
    function boardReset() {
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b5.innerHTML = "";
    b6.innerHTML = "";
    b7.innerHTML = "";
    b8.innerHTML = "";
    b9.innerHTML = "";
    b1.value = 0;
    b2.value = 0;
    b3.value = 0;
    b4.value = 0;
    b5.value = 0;
    b6.value = 0;
    b7.value = 0;
    b8.value = 0;
    b9.value = 0;
    b1.style.backgroundColor = "#1f3641";
    b2.style.backgroundColor = "#1f3641";
    b3.style.backgroundColor = "#1f3641";
    b4.style.backgroundColor = "#1f3641";
    b5.style.backgroundColor = "#1f3641";
    b6.style.backgroundColor = "#1f3641";
    b7.style.backgroundColor = "#1f3641";
    b8.style.backgroundColor = "#1f3641";
    b9.style.backgroundColor = "#1f3641";
    count = 0;
    };
    // Player vs CPU Win Check function 
    function winCheckerCPU() {
        if (b1.value == 1 && b2.value == 1 && b3.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b2.style.backgroundColor = "#31c3bd";
            b3.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b4.value == 1 && b5.value == 1 && b6.value == 1) {
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b7.value == 1 && b8.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b1.value == 1 && b4.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b4.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b2.value == 1 && b5.value == 1 && b8.value == 1) {
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b3.value == 1 && b6.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b1.value == 1 && b5.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b3.value == 1 && b5.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }


        if (b1.value == 2 && b2.value == 2 && b3.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b2.style.backgroundColor = "#f2b137";
            b3.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b4.value == 2 && b5.value == 2 && b6.value == 2) {
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b7.value == 2 && b8.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b1.value == 2 && b4.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b4.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b2.value == 2 && b5.value == 2 && b8.value == 2) {
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b3.value == 2 && b6.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b1.value == 2 && b5.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b3.value == 2 && b5.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
    };


    // if user choose X - on click display X in box
    function b1ClickedX() {
        b1.value = 1;
        b1.innerHTML = '<img id="xIconWinb1" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b1.onclick = "return false";
    }
    function b2ClickedX() {
        b2.value = 1;
        b2.innerHTML = '<img id="xIconWinb2" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b2.onclick = "return false";
    }
    function b3ClickedX() {
        b3.value = 1;
        b3.innerHTML = '<img id="xIconWinb3" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b3.onclick = "return false";
    }
    function b4ClickedX() {
        b4.value = 1;
        b4.innerHTML = '<img id="xIconWinb4" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b4.onclick = "return false";
    }
    function b5ClickedX() {
        b5.value = 1;
        b5.innerHTML = '<img id="xIconWinb5" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b5.onclick = "return false";
    }    
    function b6ClickedX() {
        b6.value = 1;
        b6.innerHTML = '<img id="xIconWinb6" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b6.onclick = "return false";
    }
    function b7ClickedX() {
        b7.value = 1;
        b7.innerHTML = '<img id="xIconWinb7" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b7.onclick = "return false";
    }
    function b8ClickedX() {
        b8.value = 1;
        b8.innerHTML = '<img id="xIconWinb8" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b8.onclick = "return false";
    }
    function b9ClickedX() {
        b9.value = 1;
        b9.innerHTML = '<img id="xIconWinb9" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b9.onclick = "return false";
    }

    // if user choose X - CPU display O in box
    function b1ClickedO() {
        b1.value = 2;
        b1.innerHTML = '<img id="oIconWinb1" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b1.onclick = "return false";
    }
    function b2ClickedO() {
        b2.value = 2;
        b2.innerHTML = '<img id="oIconWinb2" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b2.onclick = "return false";
    }
    function b3ClickedO() {
        b3.value = 2;
        b3.innerHTML = '<img id="oIconWinb3" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b3.onclick = "return false";
    }
    function b4ClickedO() {
        b4.value = 2;
        b4.innerHTML = '<img id="oIconWinb4" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b4.onclick = "return false";
    }
    function b5ClickedO() {
        b5.value = 2;
        b5.innerHTML = '<img id="oIconWinb5" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b5.onclick = "return false";
    }    
    function b6ClickedO() {
        b6.value = 2;
        b6.innerHTML = '<img id="oIconWinb6" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b6.onclick = "return false";
    }
    function b7ClickedO() {
        b7.value = 2;
        b7.innerHTML = '<img id="oIconWinb7" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b7.onclick = "return false";
    }
    function b8ClickedO() {
        b8.value = 2;
        b8.innerHTML = '<img id="oIconWinb8" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b8.onclick = "return false";
    }
    function b9ClickedO() {
        b9.value = 2;
        b9.innerHTML = '<img id="oIconWinb9" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b9.onclick = "return false";
    }
}



// Player VS Player Gameflow Function - Player1 = O
function p1OpVSp() {
    startWrapper.style.display = "none";
    boardWrapper.style.display = "flex";

    // Alert Buttons
    function tieQuitButton() {
        tieQuitBtn.addEventListener("click", function () {
            roundTied.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            displayTie = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        });
    };
    function tieRoundButton() {
        tieRoundBtn.addEventListener("click", function () {
            roundTied.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            xoroTurn();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        });
    };

    function yesRestartButton() {
        yesRestartBtn.addEventListener("click", function () {
            restartGame.style.display = "none"
            startWrapper.style.display = "block";
            boardWrapper.style.display = "none";
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            count = 0;
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        });
    };
    function noCancelButton() {
        noCancelBtn.addEventListener("click", function () {
            xWinValue = 0;
            oWinValue = 0;
            restartGame.style.display = "none"
        });
    };

    function pVSpXwin_quit() {
        PlayervsPlayerXwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSpXwin_nextRound() {
        PlayervsPlayerXwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            xoroTurn();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }

    function pVSpOwin_quit() {
        PlayervsPlayerOwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSpOwin_nextRound() {
        PlayervsPlayerOwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            count = 0;
            boardReset();
            xoroTurn();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }


    // Alert Functions
    function gameTieFunction() {
        if (xWinValue == 1) {
            return;
        };
        if (oWinValue == 1) {
            return;
        };
        displayTie += 1;
        tieResultDigits.textContent = displayTie;
        roundTied.style.display = "flex";
        count = 0;
        tieQuitButton();
        tieRoundButton();
    };
    function counterForTie() {
        count += 1;
        if (count === 9) {
            gameTieFunction();
        };
    }
    function restartGameFunction() {
        restartBtn.addEventListener("click", function () {
            restartGame.style.display = "flex"
            noCancelButton();
            yesRestartButton();
        });
    };
    function xWins() {
        playerVsplayerXwins.style.display = "flex";
        xResultDigits.textContent = displayXwin += 1;
        pVSpXwin_quit();
        pVSpXwin_nextRound();
    }
    function oWins() {
        playerVsplayerOwins.style.display = "flex";
        oResultDigits.textContent = displayOwin += 1;
        pVSpOwin_quit();
        pVSpOwin_nextRound();
    }
    restartGameFunction();


    // Player vs Player - Win Check function 
    function winChecker() {
        if (b1.value == 1 && b2.value == 1 && b3.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b2.style.backgroundColor = "#31c3bd";
            b3.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b4.value == 1 && b5.value == 1 && b6.value == 1) {
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b7.value == 1 && b8.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b1.value == 1 && b4.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b4.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b2.value == 1 && b5.value == 1 && b8.value == 1) {
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b3.value == 1 && b6.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b1.value == 1 && b5.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
        if (b3.value == 1 && b5.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWins();
        }
    
    
        if (b1.value == 2 && b2.value == 2 && b3.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b2.style.backgroundColor = "#f2b137";
            b3.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b4.value == 2 && b5.value == 2 && b6.value == 2) {
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b7.value == 2 && b8.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b1.value == 2 && b4.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b4.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b2.value == 2 && b5.value == 2 && b8.value == 2) {
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b3.value == 2 && b6.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b1.value == 2 && b5.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
        if (b3.value == 2 && b5.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWins();
        }
    };

    // Player vs Player - X or O turn function 
    function xoroTurn() {
flag = 1;
count = 0;
b1.onclick = function b1Turn() {
if (flag == 1) {
    b1.value = 1;
    b1.innerHTML = '<img id="xIconWinb1" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b1.onclick = "return false";
    flag = 0;
}
else {
    b1.value = 2;
    b1.innerHTML = '<img id="oIconWinb1" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b1.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b2.onclick = function b2Turn() {
if (flag == 1) {
    b2.value = 1;
    b2.innerHTML = '<img id="xIconWinb2" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b2.onclick = "return false";
    flag = 0;
}
else {
    b2.value = 2;
    b2.innerHTML = '<img id="oIconWinb2" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b2.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b3.onclick = function b3Turn() {
if (flag == 1) {
    b3.value = 1;
    b3.innerHTML = '<img id="xIconWinb3" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b3.onclick = "return false";
    flag = 0;
}
else {
    b3.value = 2;
    b3.innerHTML = '<img id="oIconWinb3" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b3.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b4.onclick = function b4Turn() {
if (flag == 1) {
    b4.value = 1;
    b4.innerHTML = '<img id="xIconWinb4" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b4.onclick = "return false";
    flag = 0;
}
else {
    b4.value = 2;
    b4.innerHTML = '<img id="oIconWinb4" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b4.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b5.onclick = function b5Turn() {
if (flag == 1) {
    b5.value = 1;
    b5.innerHTML = '<img id="xIconWinb5" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b5.onclick = "return false";
    flag = 0;
}
else {
    b5.value = 2;
    b5.innerHTML = '<img id="oIconWinb5" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b5.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b6.onclick = function b6Turn() {
if (flag == 1) {
    b6.value = 1;
    b6.innerHTML = '<img id="xIconWinb6" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b6.onclick = "return false";
    flag = 0;
}
else {
    b6.value = 2;
    b6.innerHTML = '<img id="oIconWinb6" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b6.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b7.onclick = function b7Turn() {
if (flag == 1) {
    b7.value = 1;
    b7.innerHTML = '<img id="xIconWinb7" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b7.onclick = "return false";
    flag = 0;
}
else {
    b7.value = 2;
    b7.innerHTML = '<img id="oIconWinb7" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b7.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b8.onclick = function b8Turn() {
if (flag == 1) {
    b8.value = 1;
    b8.innerHTML = '<img id="xIconWinb8" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b8.onclick = "return false";
    flag = 0;
}
else {
    b8.value = 2;
    b8.innerHTML = '<img id="oIconWinb8" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b8.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
}
b9.onclick = function b9Turn() {
if (flag == 1) {
    b9.value = 1;
    b9.innerHTML = '<img id="xIconWinb9" src="assets/icon-x.svg"></img>';
    turnImg2.style.display = "block";
    turnImg1.style.display = "none";
    b9.onclick = "return false";
    flag = 0;
}
else {
    b9.value = 2;
    b9.innerHTML = '<img id="oIconWinb9" src="assets/icon-o.svg"></img>';
    turnImg1.style.display = "block";
    turnImg2.style.display = "none";
    b9.onclick = "return false";
    flag = 1;
}
winChecker();
counterForTie();
};
};

    // Game Board Reset
    function boardReset() {
b1.innerHTML = "";
b2.innerHTML = "";
b3.innerHTML = "";
b4.innerHTML = "";
b5.innerHTML = "";
b6.innerHTML = "";
b7.innerHTML = "";
b8.innerHTML = "";
b9.innerHTML = "";
b1.value = "";
b2.value = "";
b3.value = "";
b4.value = "";
b5.value = "";
b6.value = "";
b7.value = "";
b8.value = "";
b9.value = "";
b1.style.backgroundColor = "#1f3641";
b2.style.backgroundColor = "#1f3641";
b3.style.backgroundColor = "#1f3641";
b4.style.backgroundColor = "#1f3641";
b5.style.backgroundColor = "#1f3641";
b6.style.backgroundColor = "#1f3641";
b7.style.backgroundColor = "#1f3641";
b8.style.backgroundColor = "#1f3641";
b9.style.backgroundColor = "#1f3641";
count = 0;
};
    
    boardReset();
    xoroTurn();
}




// Player VS CPU Gameflow Function - Player1 = O
function p1OpVScpu() {
    startWrapper.style.display = "none";
    boardWrapper.style.display = "flex";
    xResultTitle.innerHTML = "X (CPU)"
    oResultTitle.innerHTML = "O (YOU)"
    turnImg1.style.display = "none"
    turnImg2.style.display = "block"
    xWinValue = 0;
    oWinValue = 0;
    boardReset();
    player1 = 2;
    cpu = 1;
    function xGameLogic() {
        b7ClickedX();
        count += 1;
        b1.onclick = () => {
            if (b1.value === 0) {
                b1ClickedO();
                if (b2.value === 0) {
                    b2ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    b4ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    b6ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    b7ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b8.value === 0) {
                    b8ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
        b2.onclick = () => {
            if (b2.value === 0) {
                b2ClickedO();
                if (b1.value === 0) {
                    b1ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    b4ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    b6ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    b7ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b8.value === 0) {
                    b8ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
        b3.onclick = () => {
            if (b3.value === 0) {
                b3ClickedO();
                if (b2.value === 0) {
                    b2ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b1.value === 0) {
                    b1ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    b4ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    b6ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    b7ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b8.value === 0) {
                    b8ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
        b4.onclick = () => {
            if (b4.value === 0) {
                b4ClickedO();
                if (b2.value === 0) {
                    b2ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b1.value === 0) {
                    b1ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    b6ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    b7ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b8.value === 0) {
                    b8ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
        b5.onclick = () => {
            if (b5.value === 0) {
                b5ClickedO();
                if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;

                    b1.onclick = () => {
                        b1ClickedO();
                        if (b9.value === 0) {
                            b9ClickedX();
                            count += 1;
    
                            b2.onclick = () => {
                                b2ClickedO();
                                if (b8.value === 0) {
                                    b8ClickedX();
                                    count += 1;
                                    winOrTieCheck(); 
                                }
                            }
                            b4.onclick = () => {
                                b4ClickedO();
                                if (b6.value === 0) {
                                    b6ClickedX();
                                    count += 1;
                                    winOrTieCheck(); 
                                }
                            }
                            b6.onclick = () => {
                                b6ClickedO();
                                if (b8.value === 0) {
                                    b8ClickedX();
                                    count += 1;
                                    winOrTieCheck(); 
                                }
                            }
                            b8.onclick = () => {
                                b8ClickedO();
                                if (b6.value === 0) {
                                    b6ClickedX();
                                    count += 1;
                                    winOrTieCheck(); 
                                }
                            }
                            winOrTieCheck();  
                        }   
                    }
                    b2.onclick = () => {
                        b2ClickedO();
                        if (b8.value === 0) {
                            count += 1;
                            b8ClickedX();
    
                            b1.onclick = () => {
                                b1ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck(); 
                                }
                            }
    
                            b4.onclick = () => {
                                b4ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck(); 
                                }
                            }
    
                            b6.onclick = () => {
                                b6ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck(); 
                                }
                            }
    
                            b9.onclick = () => {
                                b9ClickedO();
                                if (b1.value === 0) {
                                    count += 1;
                                    b1ClickedX();
    
                                    b6.onclick = () => {
                                        b6ClickedO();
                                        if (b4.value === 0) {
                                            count += 1;
                                            b4ClickedX();
                                            winOrTieCheck();  
                                        }
                                    }
                                    b4.onclick = () => {
                                        b4ClickedO();
                                        if (b6.value === 0) {
                                            count += 1;
                                            b6ClickedX();
                                            winOrTieCheck(); 
                                        }
                                    }
                                    winOrTieCheck();  
                                }
                            }
                            winOrTieCheck();  
                        }  
                    }
                    b4.onclick = () => {
                        b4ClickedO();
                        if (b6.value === 0) {
                            count += 1;
                            b6ClickedX();
    
                            b1.onclick = () => {
                                b1ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck(); 
                                }
                            }
    
                            b2.onclick = () => {
                                b2ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck(); 
                                }
                            }
    
                            b8.onclick = () => {
                                b8ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck();  
                                }
                            }
    
                            b9.onclick = () => {
                                b9ClickedO();
                                if (b1.value === 0) {
                                    count += 1;
                                    b1ClickedX();
    
                                    b8.onclick = () => {
                                        b8ClickedO();
                                        if (b2.value === 0) {
                                            count += 1;
                                            b2ClickedX();
                                            winOrTieCheck(); 
                                        }
                                    }
                                    b2.onclick = () => {
                                        b2ClickedO();
                                        if (b8.value === 0) {
                                            count += 1;
                                            b8ClickedX();
                                            winOrTieCheck(); 
                                        }
                                    }
                                    winOrTieCheck(); 
                                }
                            }
                            winOrTieCheck(); 
                        }    
                    }
                    b6.onclick = () => {
                        b6ClickedO();
                        if (b4.value === 0) {
                            count += 1;
                            b4ClickedX();
    
                            b1.onclick = () => {
                                b1ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
    
                                    b2.onclick = () => {
                                        b2ClickedO();
                                        if (b8.value === 0) {
                                            count += 1;
                                            b8ClickedX();
                                            winOrTieCheck();  
                                        }
                                    }    
                                    b8.onclick = () => {
                                        b8ClickedO();
                                        if (b2.value === 0) {
                                            count += 1;
                                            b2ClickedX();
                                            winOrTieCheck();  
                                        }
                                    }
                                    winOrTieCheck(); 
                                }
                            }
                            b8.onclick = () => {
                                b8ClickedO();
                                if (b1.value === 0) {
                                    count += 1;
                                    b1ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            b9.onclick = () => {
                                b9ClickedO();
                                if (b1.value === 0) {
                                    count += 1;
                                    b1ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            b2.onclick = () => {
                                b2ClickedO();
                                if (b8.value === 0) {
                                    count += 1;
                                    b8ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            b1.onclick = () => {
                                b1ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            winOrTieCheck(); 
                        }   
                    }
                    b8.onclick = () => {
                        b8ClickedO();
                        if (b2.value === 0) {
                            count += 1;
                            b2ClickedX();
    
                            b9.onclick = () => {
                                b9ClickedO();
                                if (b1.value === 0) {
                                    count += 1;
                                    b1ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            b1.onclick = () => {
                                b1ClickedO();
                                if (b9.value === 0) {
                                    count += 1;
                                    b9ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            b2.onclick = () => {
                                b2ClickedO();
                                if (b6.value === 0) {
                                    count += 1;
                                    b6ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            b6.onclick = () => {
                                b6ClickedO();
                                if (b2.value === 0) {
                                    count += 1;
                                    b2ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            winOrTieCheck(); 
                        }   
                    }
                    b9.onclick = () => {
                        b9ClickedO();
                        if (b1.value === 0) {
                            count += 1;
                            b1ClickedX();
    
                            b2.onclick = () => {
                                b2ClickedO();
                                if (b4.value === 0) {
                                    count += 1;
                                    b4ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            b4.onclick = () => {
                                b4ClickedO();
                                if (b2.value === 0) {
                                    count += 1;
                                    b2ClickedX();
                                    winOrTieCheck(); 
                                }
                            }
                            b6.onclick = () => {
                                b6ClickedO();
                                if (b4.value === 0) {
                                    count += 1;
                                    b4ClickedX();
                                    winOrTieCheck(); 
                                }
                            }
                            b8.onclick = () => {
                                b8ClickedO();
                                if (b2.value === 0) {
                                    count += 1;
                                    b2ClickedX();
                                    winOrTieCheck();  
                                }
                            }
                            winOrTieCheck();  
                        }   
                    
                    };   
                                        
                } 
                                      
            
                else if (b2.value === 0) {
                    count += 1;
                    b2ClickedX();
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    count += 1;
                    b3ClickedX();
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    count += 1;
                    b4ClickedX();
                    winOrTieCheck(); 
                }
                else if (b1.value === 0) {
                    count += 1;
                    b1ClickedX();
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    count += 1;
                    b6ClickedX();
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    count += 1;
                    b7ClickedX();
                    winOrTieCheck(); 
                }
                else if (b8.value === 0) {
                    count += 1;
                    b8ClickedX();
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }
            
        }  
        b6.onclick = () => {
            if (b6.value === 0) {
                b6ClickedO();
                if (b2.value === 0) {
                    b2ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    b4ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b1.value === 0) {
                    b1ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    b7ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b8.value === 0) {
                    b8ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
        b7.onclick = () => {
            if (b7.value === 0) {
                b7ClickedO();
                if (b2.value === 0) {
                    b2ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    b4ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    b6ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b1.value === 0) {
                    b1ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b8.value === 0) {
                    b8ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
        b8.onclick = () => {
            if (b8.value === 0) {
                b8ClickedO();
                if (b2.value === 0) {
                    b2ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    b4ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    b6ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    b7ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b1.value === 0) {
                    b1ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b9ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
        b9.onclick = () => {
            if (b9.value === 0) {
                b9ClickedO();
                if (b1.value === 0) {
                    b1ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b2.value === 0) {
                    b2ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b3.value === 0) {
                    b3ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b4.value === 0) {
                    b4ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b5.value === 0) {
                    b5ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b6.value === 0) {
                    b6ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else if (b7.value === 0) {
                    b7ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
                else {
                    b8ClickedX();
                    count += 1;
                    winOrTieCheck(); 
                }
            }

        }
    }
    xGameLogic();


    // Alert Buttons
    function tieQuitButton() {
        tieQuitBtn.addEventListener("click", function () {
            roundTied.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            xWinValue = 0;
            oWinValue = 0;
            displayTie = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            urnImg2.style.display = "none";
        });
    };
    function tieRoundButton() {
        tieRoundBtn.addEventListener("click", function () {
        roundTied.style.display = "none";
        xWinValue = 0;
        oWinValue = 0;
        count = 0;
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        boardReset();
        xGameLogic();
        });
    };

    function yesRestartButton() {
        yesRestartBtn.addEventListener("click", function () {
            restartGame.style.display = "none"
            startWrapper.style.display = "block";
            boardWrapper.style.display = "none";
            xWinValue = 0;
            oWinValue = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            count = 0;
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
            boardReset();
        });
    };
    function noCancelButton() {
        noCancelBtn.addEventListener("click", function () {
            restartGame.style.display = "none"
            xWinValue = 0;
            oWinValue = 0;
        });
    };

    function pVSCPUXwin_quit() {
        PlayervsPlayerXwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            xWinValue = 0;
            oWinValue = 0;
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSCPUXwin_nextRound() {
        PlayervsPlayerXwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerXwins.style.display = "none";
            count = 0;
            xWinValue = 0;
            oWinValue = 0;
            
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
            boardReset();
            xGameLogic();
        })
    }

    function pVSCPUOwin_quit() {
        PlayervsPlayerOwins_QuitBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            boardWrapper.style.display = "none";
            startWrapper.style.display = "block";
            displayTie = 0;
            displayOwin = 0;
            displayXwin = 0;
            tieResultDigits.textContent = 0;
            xResultDigits.textContent = 0;
            oResultDigits.textContent = 0;
            count = 0;
            boardReset();
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
        })
    }
    function pVSCPUOwin_nextRound() {
        PlayervsPlayerOwins_NextRoundBtn.addEventListener("click", function () {
            playerVsplayerOwins.style.display = "none";
            count = 0;
            boardReset();
            xWinValue = 0;
            oWinValue = 0;
            turnImg1.style.display = "block";
            turnImg2.style.display = "none";
            xGameLogic();
        })
    }


    // Alert Functions
    function gameTieFunction() {
            if (xWinValue == 1) {
                return;
            };
            if (oWinValue == 1) {
                return;
            };
            displayTie += 1;
            tieResultDigits.textContent = displayTie;
            roundTied.style.display = "flex";
            count = 0;
            tieQuitButton();
            tieRoundButton();
    };
    function counterForTie() {
            count += 1;
            if (count === 9) {
                gameTieFunction();
            };
    }
    function restartGameFunction() {
            restartBtn.addEventListener("click", function () {
                restartGame.style.display = "flex"
                noCancelButton();
                yesRestartButton();
            });
    };
    function xWinsCPU() {
        if (oWinValue == 1) {
            return;
        }
        playerVsplayerXwins.style.display = "flex";
        xResultDigits.textContent = displayXwin += 1;
        pVSCPUXwin_quit();
        pVSCPUXwin_nextRound();
    }
    function oWinsCPU() {
        playerVsplayerOwins.style.display = "flex";
        if (xWinValue == 1) {
            return;
        }
        oResultDigits.textContent = displayOwin += 1;
        pVSCPUOwin_quit();
        pVSCPUOwin_nextRound();
    }
    function winOrTieCheck() {
        winCheckerCPU();
        xWinsTitle.textContent = "OH NO, YOU LOST…";
        oWinsTitle.textContent = "YOU WON!";
        counterForTie(); 
    }
    restartGameFunction();


    // Game Board Reset
    function boardReset() {
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b5.innerHTML = "";
    b6.innerHTML = "";
    b7.innerHTML = "";
    b8.innerHTML = "";
    b9.innerHTML = "";
    b1.value = 0;
    b2.value = 0;
    b3.value = 0;
    b4.value = 0;
    b5.value = 0;
    b6.value = 0;
    b7.value = 0;
    b8.value = 0;
    b9.value = 0;
    b1.style.backgroundColor = "#1f3641";
    b2.style.backgroundColor = "#1f3641";
    b3.style.backgroundColor = "#1f3641";
    b4.style.backgroundColor = "#1f3641";
    b5.style.backgroundColor = "#1f3641";
    b6.style.backgroundColor = "#1f3641";
    b7.style.backgroundColor = "#1f3641";
    b8.style.backgroundColor = "#1f3641";
    b9.style.backgroundColor = "#1f3641";
    count = 0;
    };
    // Player vs CPU Win Check function 
    function winCheckerCPU() {
        if (b1.value == 1 && b2.value == 1 && b3.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b2.style.backgroundColor = "#31c3bd";
            b3.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b4.value == 1 && b5.value == 1 && b6.value == 1) {
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b7.value == 1 && b8.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b1.value == 1 && b4.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b4.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b2.value == 1 && b5.value == 1 && b8.value == 1) {
            document.getElementById("xIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b8.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b3.value == 1 && b6.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b6.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b1.value == 1 && b5.value == 1 && b9.value == 1) {
            document.getElementById("xIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b9.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }
        if (b3.value == 1 && b5.value == 1 && b7.value == 1) {
            document.getElementById("xIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("xIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#31c3bd";
            b5.style.backgroundColor = "#31c3bd";
            b7.style.backgroundColor = "#31c3bd";
            xWinValue = 1;
            xWinsCPU();
        }


        if (b1.value == 2 && b2.value == 2 && b3.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b2.style.backgroundColor = "#f2b137";
            b3.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b4.value == 2 && b5.value == 2 && b6.value == 2) {
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            b4.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b7.value == 2 && b8.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b7.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b1.value == 2 && b4.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb4").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b4.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b2.value == 2 && b5.value == 2 && b8.value == 2) {
            document.getElementById("oIconWinb2").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb8").style.filter = "brightness(10%)"
            b2.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b8.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b3.value == 2 && b6.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb6").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b6.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b1.value == 2 && b5.value == 2 && b9.value == 2) {
            document.getElementById("oIconWinb1").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb9").style.filter = "brightness(10%)"
            b1.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b9.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
        if (b3.value == 2 && b5.value == 2 && b7.value == 2) {
            document.getElementById("oIconWinb3").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb5").style.filter = "brightness(10%)"
            document.getElementById("oIconWinb7").style.filter = "brightness(10%)"
            b3.style.backgroundColor = "#f2b137";
            b5.style.backgroundColor = "#f2b137";
            b7.style.backgroundColor = "#f2b137";
            oWinValue = 1;
            oWinsCPU();
        }
    };


    // if user choose O - on click display O in box
    function b1ClickedO() {
        b1.value = 2;
        b1.innerHTML = '<img id="oIconWinb1" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b1.onclick = "return false";
    }
    function b2ClickedO() {
        b2.value = 2;
        b2.innerHTML = '<img id="oIconWinb2" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b2.onclick = "return false";
    }
    function b3ClickedO() {
        b3.value = 2;
        b3.innerHTML = '<img id="oIconWinb3" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b3.onclick = "return false";
    }
    function b4ClickedO() {
        b4.value = 2;
        b4.innerHTML = '<img id="oIconWinb4" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b4.onclick = "return false";
    }
    function b5ClickedO() {
        b5.value = 2;
        b5.innerHTML = '<img id="oIconWinb5" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b5.onclick = "return false";
    }    
    function b6ClickedO() {
        b6.value = 2;
        b6.innerHTML = '<img id="oIconWinb6" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b6.onclick = "return false";
    }
    function b7ClickedO() {
        b7.value = 2;
        b7.innerHTML = '<img id="oIconWinb7" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b7.onclick = "return false";
    }
    function b8ClickedO() {
        b8.value = 2;
        b8.innerHTML = '<img id="oIconWinb8" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b8.onclick = "return false";
    }
    function b9ClickedO() {
        b9.value = 2;
        b9.innerHTML = '<img id="oIconWinb9" src="assets/icon-o.svg"></img>';
        turnImg1.style.display = "block";
        turnImg2.style.display = "none";
        b9.onclick = "return false";
    }

    // if user choose O - CPU display X in box
    function b1ClickedX() {
        b1.value = 1;
        b1.innerHTML = '<img id="xIconWinb1" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b1.onclick = "return false";
    }
    function b2ClickedX() {
        b2.value = 1;
        b2.innerHTML = '<img id="xIconWinb2" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b2.onclick = "return false";
    }
    function b3ClickedX() {
        b3.value = 1;
        b3.innerHTML = '<img id="xIconWinb3" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b3.onclick = "return false";
    }
    function b4ClickedX() {
        b4.value = 1;
        b4.innerHTML = '<img id="xIconWinb4" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b4.onclick = "return false";
    }
    function b5ClickedX() {
        b5.value = 1;
        b5.innerHTML = '<img id="xIconWinb5" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b5.onclick = "return false";
    }    
    function b6ClickedX() {
        b6.value = 1;
        b6.innerHTML = '<img id="xIconWinb6" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b6.onclick = "return false";
    }
    function b7ClickedX() {
        b7.value = 1;
        b7.innerHTML = '<img id="xIconWinb7" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b7.onclick = "return false";
    }
    function b8ClickedX() {
        b8.value = 1;
        b8.innerHTML = '<img id="xIconWinb8" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b8.onclick = "return false";
    }
    function b9ClickedX() {
        b9.value = 1;
        b9.innerHTML = '<img id="xIconWinb9" src="assets/icon-x.svg"></img>';
        turnImg1.style.display = "none";
        turnImg2.style.display = "block";
        b9.onclick = "return false";
    }
}




// Gameflow
vsPlayerBtn.addEventListener("click", function() {
    if (player1 == 1) {p1XpVSp()};
    })
    
vsCpuBtn.addEventListener("click", function() {
    if (player1 == 1) {p1XpVScpu()};
    })

vsPlayerBtn.addEventListener("click", function() {
    if (player1 == 2) {p1OpVSp()};
    })

vsCpuBtn.addEventListener("click", function() {
    if (player1 == 2) {p1OpVScpu()};
    })










