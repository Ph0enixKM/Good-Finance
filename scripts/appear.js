function appear (qs) {
    let elements = document.querySelectorAll(qs)

    for (const el of elements) {
        let offset = el.getBoundingClientRect().top

        setInterval(() => {   
            let cont = document.querySelector('cont').scrollTop
            console.log(offset);
            

            if (cont >= offset - 50) {
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