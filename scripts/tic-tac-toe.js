const dis = document.querySelector('.status');
let gameActive = true;
let cur = "X";
let state = ["", "", "", "", "", "", "", "", ""];
const disWin = () => "you won";
const disDraw = () => "draw";
const turn = () => "player " + cur + "turn";
function play() {
}
function change() {
}
function results() {
}
function click() {
}
function change() {
    cur = cur == "X" ? "O" : "X";
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', click));
        const howToWin = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8],
            [0, 3, 6],[1, 4, 7],[2, 5, 8],
            [0, 4, 8],[2, 4, 6]
        ];
function click(event) {
        const clicked = event.target;
        const Index = parseInt(
          clicked.getAttribute('index')
        );
        if (state[Index] !== "" || !gameActive) {
            return;
        }
        play(clicked, Index);
        results();
    }
    function play(clicked, Index) {

            state[Index] = cur;
            clicked.innerHTML = cur;
        }
        function results() {
            let won = false;
            for (let i = 0; i < 8; i++) {
                const winCondition = howToWin[i];
                let a = state[winCondition[0]];
                let b = state[winCondition[1]];
                let c = state[winCondition[2]];
                if (a == '' || b == '' || c == '') {
                    continue;
                }
                if (a == b && b == c) {
                    won = true;
                    break
                }
            }
        if (won) {
                alert("you won");
                return;
            }
            let draw = !state.includes("");
            if (draw) {
                alert("draw");
                return;
            }
            change();
        }