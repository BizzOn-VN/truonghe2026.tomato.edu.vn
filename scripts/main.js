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

const target = document.getElementById('dang-ky');
const buttons = document.querySelectorAll('.scroll-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

const target_1 = document.getElementById('targetDiv-1');
const buttons_1 = document.querySelectorAll('.scroll-btn-1');

  buttons_1.forEach(button => {
    button.addEventListener('click', () => {
      target_1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

new WOW().init();



// Chọn container cha để lắng nghe sự kiện (Event Delegation)
const mdContent = document.querySelector('.section-4 .md-content');

mdContent.addEventListener('click', (e) => {
  // Tìm thẻ 'a' gần nhất nếu người dùng click vào hình ảnh bên trong thẻ 'a'
  const clickedBtn = e.target.closest('a');
  
  // Nếu click không trúng thẻ 'a' hoặc không phải nút chúng ta cần, bỏ qua
  if (!clickedBtn || !['btn-1', 'btn-2'].includes(clickedBtn.id)) return;

  e.preventDefault(); // Ngăn hành động mặc định của thẻ a

  // Xác định ID của phần tử ảnh tương ứng dựa trên ID của nút
  const targetId = clickedBtn.id === 'btn-1' ? 'img-1' : 'img-2';
  const targetImg = document.getElementById(targetId);
  const otherImg = targetId === 'img-1' ? document.getElementById('img-2') : document.getElementById('img-1');

  // 1. Cập nhật hiển thị ảnh
  otherImg.classList.remove('show');
  targetImg.classList.add('show');

  // 2. Cập nhật trạng thái 'active' cho các nút
  document.querySelectorAll('.md-col a').forEach(a => a.classList.remove('active'));
  clickedBtn.classList.add('active');

  // 3. Cuộn đến vị trí ảnh
  targetImg.scrollIntoView({ behavior: 'smooth', block: 'center' });
});


