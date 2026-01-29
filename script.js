const btn = document.querySelector('button')
const aside = document.querySelector('aside.menuBar')

btn.addEventListener('click', () => {
    if (window.getComputedStyle(aside).display == 'flex'){
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>'
        aside.style.display = 'none'
    } else{
        btn.innerHTML = '<i class="fa-solid fa-x"></i>'
        aside.style.display = 'flex'
    }

})