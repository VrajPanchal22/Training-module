const sections=document.querySelectorAll(".section");

sections.forEach((section)=>{
section.addEventListener("click",()=>{
    sections.forEach((section)=>{
        section.classList.remove("clicked");
    });
    section.classList.add("clicked");
});
});