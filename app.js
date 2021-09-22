const board = document.querySelector('#board')

const colors = ['#00eddf','#00a0b3','#4390e1','#80549f',
                '#810b59','#fa045a','#fb84c7','#fa9073']

const cont = document.querySelector('.container')
const sqr_num = cont.clientWidth * cont.clientHeight / (20*20) - 3 

for(let i = 0; i < sqr_num; i++){
    addSquare()
}

cont.addEventListener('click', () => {
    turnBoard()
})

document.addEventListener('keydown', (event) => {
    if (event.code == 'Space') {
        turnBoard()
    } 
});

function turnBoard(){
    //we just keep the current angle in containers' attribute
    my_degree = parseInt(cont.getAttribute('degree'))
    cont.setAttribute("degree", `${(my_degree + 45) % 90}`);
    cont.style.transform = `rotate(${cont.getAttribute('degree')}deg)`
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
    
}

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
