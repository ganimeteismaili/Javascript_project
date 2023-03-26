let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});



var swiper = new Swiper(".home-slider", {
   loop:true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".gallery-slider", {
   loop:true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});

// function answer () {
//    var adult_input =parseInt (document.getElementById("adult").value);
//    var child_input =parseInt (document.getElementById("child").value);
//    var room_input =parseInt (document.getElementById("room").value);

//    var full = adult_input ;
//    var half = child_input;
//    var total=room_input*50;

//    document.getElementById("output_1").innerHTML=full;
//    document.getElementById("output_2").innerHTML=half;
//    document.getElementById("output_3").innerHTML=total;

// }


//one room cost 100, and every extra night cost -10

const answer = () => {
   const adult = document.getElementById('adult').value;
   const child = document.getElementById('child').value;
   let room = document.getElementById('room').value;
   let totalPrice = 0;
 
   totalPrice = (room * 100);
   if (room > 1) {
     totalPrice += ((room - 1) * -10);
   }
 
   document.getElementById('output_1').innerHTML = adult;
   document.getElementById('output_2').innerHTML = child;
   document.getElementById('output_3').innerHTML = totalPrice;
 
 }


//one adult pays 50, child pays 20 when the number of adult si even, child pays 50 when the number of adults is odd


//  const answer = () => {
//    const adult = document.getElementById('adult').value;
//    const child = document.getElementById('child').value;
//    let totalPrice = 0;
 
//    totalPrice = (50 * adult);
 
//    if (adult % 2 === 0) {
//      totalPrice += (20 * child);
//    } else {
//      totalPrice += (50 * child);
//    }
 
//    document.getElementById('output_1').innerHTML = adult;
//    document.getElementById('output_2').innerHTML = child;
//    document.getElementById('output_3').innerHTML = totalPrice;
//  }
