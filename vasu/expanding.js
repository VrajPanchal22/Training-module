
 const sections = document.querySelectorAll('.first')


 sections.forEach((first)=>{
     first.addEventListener('click',()=>{
  
     sections.forEach((first) => {
         first.classList.remove('active')
     })
     first.classList.add('active')
 })
 })
