'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
    
});



$(window).scroll(function(){
    if ($(window).scrollTop() >= 90) {
        $('.main-header').addClass('scroll-top');
    }
    else {
        $('.main-header').removeClass('scroll-top');
    }
    
});


$('.ui.dropdown')
  .dropdown()
;


// $("#modal-sucess-1").fancybox().trigger('click');

new WOW().init();

$('.banner .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.section-3 .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.section-6 .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');

// Hàm xử lý tráo đổi
function toggleContent(showImg, hideImg, activeBtn, inactiveBtn) {
  // Hiện ảnh này, ẩn ảnh kia
  showImg.classList.add('show');
  hideImg.classList.remove('show');
  
  // Đổi trạng thái active của nút
  activeBtn.classList.add('active');
  inactiveBtn.classList.remove('active');
  showImg.scrollIntoView({
    behavior: 'smooth', // Cuộn mượt mà thay vì nhảy lập tức
    block: 'center'     // Đưa phần tử ra giữa màn hình (hoặc dùng 'start')
  });
}

// Gán sự kiện cho Nút 1
btn1.addEventListener('click', () => {
  toggleContent(img1, img2, btn1, btn2);
});

// Gán sự kiện cho Nút 2
btn2.addEventListener('click', () => {
  toggleContent(img2, img1, btn2, btn1);
});

const target = document.getElementById('targetDiv');
  const buttons = document.querySelectorAll('.scroll-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });