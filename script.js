const cont = document.querySelector('.container');
const btn = document.querySelector('.changeGrid');
var isGrid = false;
/* Add limit to amount of squares*/
function makeGrid(nPerSide) {
    const numberSquares = nPerSide * nPerSide;
    const screenSize = 960; /*px*/
    let squareWidth = screenSize / nPerSide;
    for (let i = 0; i < numberSquares; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'smallSquare');
        div.style.cssText = `border:dotted 0.01px black;width:${squareWidth - 2}px;height:${squareWidth - 2}px;`
        /*add the possibility to choose border style */
        cont.appendChild(div)
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = 'pink'
        })
        isGrid = true
    }
}

btn.addEventListener('click', () => {
    if (isGrid) {
        cont.textContent = ''
    }
    do {
        var userGrid = prompt('Insert amount of squares per side between 10 and 50: ');
    } while (userGrid > 50)
    makeGrid(userGrid)
})



