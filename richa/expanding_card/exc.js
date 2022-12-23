const selects=document.querySelectorAll(".box");

selects.forEach((box)=>{
box.addEventListener("click",()=>{
    selects.forEach((box)=>{
        box.classList.remove("active");
    });
    box.classList.add("active");
});
});