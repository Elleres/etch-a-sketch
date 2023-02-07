const cont = document.querySelector('.container');
const btn = document.querySelector('.changeGrid');
var isGrid = false;
/* Add limit to amount of squares*/
makeGrid(30)
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
        isGrid = true
    }
    addEvent('div', 'smallSquare')
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


function properAdd(divName) {
    divName.addEventListener('mouseover', (e) => {
        divName.style.backgroundColor = 'grey'
        e.cancelBubble = true
        console.log(e)
    })
}

function addEvent(HTMLTag, HTMLid) {
    const nodeSmallSquares = document.querySelectorAll(HTMLTag, "#", HTMLid)
    nodeSmallSquares.forEach(properAdd)

}
