let qs = document.querySelector.bind(document)

let canvas = qs('jumbo .bg')
let c = canvas.getContext('2d')
const PI = Math.PI
let size = canvas.getBoundingClientRect()
var { width, height, top, left } = size
canvas.width = width
canvas.height = height
let x = 0
let y = 0

function update(c, canvas){

    c.fillStyle = 'rgba(0,0,0,0.3)'
    c.fillRect(0, 0, width, height)

    for (let i = 0; i < width/50; i++){
        for (let j = 0; j < height/50; j++){
            let vw = Math.pow(x - i*50,2)
            let vh = Math.pow(y - j*50,2)
            let wh = Math.sqrt(vw + vh)
            let res = (wh < 50) ? (wh+1)/50 : 1
        
            c.fillStyle = 'white'
            c.beginPath()
            c.arc(i*50, j*50, res, 0, 2*PI)
            c.fill()
        }
    }
    
}

window.addEventListener('mousemove', e => {
    let { x, y } = e
    update(c, canvas)
})
update(c, canvas)