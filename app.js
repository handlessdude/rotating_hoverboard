const board = document.querySelector('#board')

const colors = ['#00eddf','#00a0b3','#4390e1','#80549f',
                '#810b59','#fa045a','#fb84c7','#fa9073']

const cont = document.querySelector('.container')
const sqr_num = cont.clientWidth * cont.clientHeight / (20*20)
const infoCont = document.querySelector('#info-cont')
const infoColor = document.querySelector('#info-color')
const infoHeader = document.querySelector('#color-label')
const closebtn = document.querySelector('#close-btn')

hideInfoCont()

for(let i = 0; i < sqr_num; i++){
    addSquare()
}

const rotateBtn = document.querySelector('#rotate-button')
rotateBtn.addEventListener('click', ()=>{
    rotateBoard()
})

document.addEventListener('keydown', (event) => {
    if (event.code == 'Space') {
        rotateBoard()
    } else if (event.code == 'Escape') {
        hideInfoCont()
    } 
});

function rotateBoard(){
    //we just keep the current angle in containers' attribute
    my_degree = parseInt(cont.getAttribute('degree'))
    cont.setAttribute("degree", `${(my_degree + 45) % 90}`);
    cont.style.transform = `rotate(${cont.getAttribute('degree')}deg)`
}

function hideInfoCont(){
    infoCont.style.opacity = '0';
}


function addSquare(){
    //1. here  we create square virtually
    const square = document.createElement('div')
    square.classList.add('square')

    //2. here we assign its parent
    board.append(square)

    //3. adding styles
    square.addEventListener('mouseover', ()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave', ()=>{
        removeColor(square)
    })
    square.addEventListener('click', ()=>{
        showInfoCont(square.style.backgroundColor)
    })
}

function showInfoCont(sqr_color){
    infoColor.style.backgroundColor = sqr_color
    infoColor.style.boxShadow = `0 0 3px ${sqr_color}, 0 0 3px ${sqr_color}`
    infoHeader.innerHTML = sqr_color
    infoCont.style.opacity = '1';
}


closebtn.addEventListener('click',()=>{hideInfoCont()})

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 0px #000'
}

function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
