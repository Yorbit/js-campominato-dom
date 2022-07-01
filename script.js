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

        newCell.innerHTML = (index + 1);

        parentGrid.append(newCell);

        newCell.addEventListener('click', function () {

            newCell.classList.toggle('active');

            console.log('HAI CLICCATO IL NUMERO', + index + 1);
        })
    }
})

function createNewCell() {
    const cell = document.createElement('div');

    cell.classList.add('cell');

    return cell;
}