/* const cont = document.querySelector('.container');

function makeGrid(nPerSide) {
    for (let i = 0; i < nPerSide * nPerSide;i++){
        const div = document.createElement('div');

    }
}
 */

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.style.cssText = "border:solid 1px black;width:58px;height:58px;"
    div.setAttribute('id', 'div')
    cont.appendChild(div)
    div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = 'blue'
    })
}
