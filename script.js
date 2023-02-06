const cont = document.querySelector('.container');

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

    }
}

makeGrid(30)


