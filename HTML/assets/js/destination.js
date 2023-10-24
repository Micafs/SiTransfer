 /*--------------- Destination Slider ---------------*/ 
var swiper = new Swiper(".destination-slider", {

    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, 
    },
  
    pagination: {
      el: ".swiper-pagination2",
      clickable:true,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
  },
  
  }); 