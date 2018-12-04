let mobile = document.querySelector('header mobile .menu')
let tab = document.querySelector('header mobile .menu-tab')
let menuTab = false

mobile.onclick = () => {
    if (menuTab) {
        tab.style.transform = 'scaleY(0)'
        menuTab = false
    } else {
        tab.style.transform = 'scaleY(1)'
        menuTab = true
    }
}