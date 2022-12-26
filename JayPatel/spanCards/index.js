document.addEventListener('click', (event) => {
    
    if(event.target.id != "container") {

        event.target.parentElement.childNodes.forEach((element, index) => {
            console.log(element, index);

            if(index % 2 == 1) {
                if(event.target === element) {
                    element.classList.add("span-card--span")
                }
                else {
                    element.classList.remove("span-card--span")
                }
            }
        });
    }

})