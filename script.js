const grid = document.getElementById('myRange')
const cont = document.querySelector('.container');
const btn = document.querySelector('.changeGrid');
const sliderText = document.querySelector('.sliderText')


function makeGrid(nPerSide) {
    const numberSquares = nPerSide * nPerSide;
    const screenSize = 500; /*px*/
    let squareWidth = screenSize / nPerSide;
    for (let i = 0; i < numberSquares; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'smallSquare');
        div.style.cssText = `border:dotted 0.01px black;width:${squareWidth - 2}px;height:${squareWidth - 2}px;`
        cont.appendChild(div)
        isGrid = true
    }
    addEvent('div', 'smallSquare')
}

function properAdd(divName) {
    divName.addEventListener('mouseover', event => {
        event.cancelBubble = true
        if (event.buttons == 1) {
            divName.style.backgroundColor = 'black'
        }
    })
}


function addEvent(HTMLTag, HTMLid) {
    const name = HTMLTag + '#' + HTMLid
    const nodeSmallSquares = document.querySelectorAll(name)
    nodeSmallSquares.forEach(properAdd)

}


grid.addEventListener('change', event => {
    cont.textContent = ''
    makeGrid(grid.value)
    sliderText.textContent = `${grid.value} x ${grid.value}`
})

