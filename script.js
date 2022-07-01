let positionBomb = [];

let endGame;

const btnStart = document.getElementById('btn-start-game')


btnStart.addEventListener('click', function () {

    endGame = false;

    document.getElementById("btn-start-game").disabled = true;

    const parentGrid = document.getElementById("grid-game");

    parentGrid.classList.add('grid-container')

    positionBomb = [];

    for (let index = 0; index <= 16; index++) {

        const bombAlone = bombGen(positionBomb, 1, 100);

        positionBomb.push(bombAlone);

        console.log(positionBomb);
    }


    for (let index = 0; index < 100; index++) {

        const newCell = createNewCell();

        parentGrid.append(newCell);

        newCell.addEventListener('click', function () {

            if (positionBomb.includes(index + 1)) {

                newCell.classList.add('bomb-hit');

                endGame = true;

                if (endGame == true) {

                    parentGrid.innerHTML = null;

                    parentGrid.classList.remove('container-start');

                    alert('GAME OVER!! Premi Play Game per Riprovare');

                    document.getElementById("btn-start-game").disabled = false;
                }
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

        })
    }
})

function createNewCell() {
    const cell = document.createElement('div');

    cell.classList.add('cell');

    return cell;
}

function bombGen(bombNumberPosition, min, max) {

    let randomBomb;

    let validBomb = false;

}