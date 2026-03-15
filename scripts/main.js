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


document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy tất cả các nút (thẻ a có id bắt đầu bằng btn-)
    const buttons = document.querySelectorAll('[id^="btn-"]');
    const contents = document.querySelectorAll('.content-box');

    if (buttons.length === 0) {
        console.error("Không tìm thấy nút nào có ID bắt đầu bằng 'btn-'");
        return;
    }

    buttons.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault(); // Rất quan trọng: Ngăn thẻ <a> làm load lại trang

            // Lấy số từ ID của nút (ví dụ: btn-3 -> lấy số 3)
            const idNumber = this.id.split('-')[1];
            const targetImg = document.getElementById(`img-${idNumber}`);

            console.log("Bạn vừa click nút số:", idNumber); // Kiểm tra xem nút có ăn click không

            if (targetImg) {
                // Xóa active/show của tất cả
                buttons.forEach(b => b.classList.remove('active'));
                contents.forEach(c => c.classList.remove('show'));

                // Thêm active/show cho cái được chọn
                this.classList.add('active');
                targetImg.classList.add('show');

                // Cuộn mượt
                targetImg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                console.error(`Không tìm thấy phần tử img-${idNumber} tương ứng`);
            }
        };
    });
});

const target = document.getElementById('targetDiv');
  const buttons = document.querySelectorAll('.scroll-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

new WOW().init();
