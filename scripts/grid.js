let qs = document.querySelector.bind(document)

let canvas = qs('jumbo .bg')
let c = canvas.getContext('2d')
const PI = Math.PI
let size = canvas.getBoundingClientRect()
let { width, height } = size
let canTop = size.top;
let canLeft = size.left
canvas.width = width
canvas.height = height
let x = 0
let y = 0

function update(c, canvas, x, y){
    c.clearRect(0, 0, width, height)
    c.fillStyle = 'rgba(0,0,0,0.1)'
    c.fillRect(0, 0, width, height)

    for (let i = 0; i < width/50; i++){
        for (let j = 0; j < height/50; j++){
            let vw = Math.pow(x - i*50 - canLeft, 2)
            let vh = Math.pow(y - j*50 - canTop, 2)
            let wh = Math.sqrt(vw + vh)
            let res = (wh < 150) ? 150/(wh+1) : 1
            res = (res > 5) ? 5 : res
            

        
            c.fillStyle = 'white'
            c.beginPath()
            c.arc(i*50, j*50, res, 0, 2*PI)
            c.fill()
        }
    }
    
}

window.addEventListener('mousemove', e => {
    let { x, y } = e
    update(c, canvas, x, y)
})
update(c, canvas, x, y)

let oferta = document.querySelector('button#oferta')
let art = document.querySelector('article')
let cont = document.querySelector('cont')
oferta.addEventListener('click', () => {
        art.scrollIntoView({
            behavior: 'smooth'
        })
})