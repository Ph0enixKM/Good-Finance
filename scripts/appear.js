function appear (qs) {
    let elements = document.querySelectorAll(qs)
    for (const el of elements) {
        
        let offset = el.getBoundingClientRect().top
        
        console.log(offset, document.querySelector('cont').scrollTop)
        

        setInterval(() => {   
            let cont = document.querySelector('cont').scrollTop
            
            if (cont >= offset - 300) {
                el.children[1].style.transform = 'translate(0, -100%)'
            } else {
                el.children[1].style.transform = 'translate(-200%, -100%)'
            }
            
        }, 100)

        el.onclick = () => {
            location.href = 'working.html'
        }
        
    }
    

}

appear('article')