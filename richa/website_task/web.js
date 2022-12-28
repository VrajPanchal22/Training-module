// let leftbtn=document.getElementsByClassName('slidebtnleft')[0];
// let rightbtn=document.getElementsByClassName('slidebtnright')[0];

// rightbtn.addEventListener('click',()=>{
//     console.log(document.getElementsByClassName('card-show').classList);//.remove('card-show');
//     document.querySelectorAll('.card-show').classList.add('card-hide');
// })

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoplay: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: { items: 3 },
    },
  });