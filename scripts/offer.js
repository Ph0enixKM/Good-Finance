let offers = document.querySelectorAll('span.offer')
for (let offer of offers) {
    offer.addEventListener('click', () => {
        offer.children[1].style.display = 'block'
    })
}