
let positionBomb = [];

let endGame;

const btnStart = document.getElementById('btn-start-game');

const userPointsNum = document.getElementById("user-points-num");

let userPoints = 1;

function createNewCell() {
    const cell = document.createElement('div');

    cell.classList.add('cell');

    return cell;
}

function bombGen(bombNumberPosition, min, max) {

    let randomBomb;

    let okBomb = false;

    while (okBomb === false) {

        randomBomb = (Math.floor(Math.random() * max) + min);

        if (!bombNumberPosition.includes(randomBomb)) {

            okBomb = true;
        }
    }

    return randomBomb;
}

btnStart.addEventListener('click', function (event) {

    let userPoints = 1;

    event.target.innerText = 'Try Again';

    endGame = false;

    document.getElementById("btn-start-game").disabled = true;

    const parentGrid = document.getElementById("grid-game");


    parentGrid.classList.add('grid-container')

    positionBomb = [];

    for (let index = 0; index <= 16; index++) {

        const bombAlone = bombGen(positionBomb, 1, 100);

        positionBomb.push(bombAlone);

        //console.log(positionBomb);
    }
    console.log(positionBomb);

    let winGame = ((100) - (16));

    for (let index = 0; index < 100; index++) {

        const newCell = createNewCell();

        parentGrid.append(newCell);

        newCell.addEventListener('click', function () {

            //console.log(index);

            if (newCell.classList.contains('active')) {
                alert('HAI GIA SELEZIONATO')
                return;
            }

            console.log(index + 1);

            let checkBomb = index + 1;

            if (positionBomb.includes(checkBomb)) {

                newCell.classList.add('bomb');

                endGame = true;

                if (endGame == true) {

                    alert('HAI COLPITO UNA BOMBA -GAME OVER-!! Premi Try Again per Riprovare');

                    parentGrid.classList.remove('container-start');

                    document.getElementById("btn-start-game").disabled = false;
                }

                else {

                    newCell.classList.add('on');

                    let counter = document.querySelectorAll(".on").length;

                    if (counter == winGame) {

                        alert('VITTORIA!! Premi Play Game per giocare ancora')

                        parentGrid.innerHTML = null;

                        document.getElementById("btn-start-game").disabled = false;
                    }
                }
            }
            else {
                newCell.classList.toggle('active');

                userPointsNum.innerText = `Punti: ${userPoints}`;

                userPointsNum.innerHTML = `Punti: ${userPoints}`;

                Points = userPoints++;
            }
        })
    }
})