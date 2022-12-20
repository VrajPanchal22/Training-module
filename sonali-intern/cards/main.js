const card = document.querySelectorAll(".card");

card.forEach(e => {
    e.addEventListener('click', () => {
        handleRemoveClass()
        e.classList.add('active')
    })
})

const handleRemoveClass = ()=> {
    card.forEach(e => {
        e.classList.remove('active')
    })
}

