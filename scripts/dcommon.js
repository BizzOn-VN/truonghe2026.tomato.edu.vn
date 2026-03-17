var App = App || {};

//---MAIN----
jQuery(function () {
    App.Dev.contactFormValidate();
    // App.Dev.contactFormValidate2();
    /* App.Dev.contactFormValidate2();
    App.Dev.contactFormValidate3();
    App.Dev.subscribeFormValidate(); */
    App.Dev.getCurrentDate();
});

//--All site
App.Dev = function(){
    var flag = 1;
    var money = 300000;
    var global_discount = 0;
    var qr_url = '';

    var register = function(){
        if (jQuery('form#ggcontact').valid() && flag) {
            // let question1 = getQuestionAnswer(1);
            // let question2 = getQuestionAnswer(2);
            // let question3 = getQuestionAnswer(3);

            var data = jQuery('form#ggcontact').serialize();
            console.log(data);
            jQuery('#gg-submit').val('Đang gửi...');
            
            flag = 0;

            jQuery.ajax({
                type : 'GET',
                url: 'https://script.google.com/macros/s/AKfycbwjQABwj0SGRRrKiXcuE0dency-tClvvhXelgF2oOanbTHAYtystk4vRpIDlA56Ukk5/exec',
                dataType:'json',
                crossDomain : true,
                data : data,
                success : function(data)
                {
                    if(data == 'false')
                    {
                        alert('ERROR, Please try again later!');
                    }else{
                        flag = 1;
                        jQuery('#gg-submit').val('Gửi thông tin');

                        jQuery('form#ggcontact')[0].reset();

                        if (data.result == "success") {
                            gtag('event', 'dangKyThanhCong-mindFulExplorer'); //send GA

                            $.fancybox.close();
                            $("#modal-sucess-1").fancybox().trigger('click');
                        }
                    }
                }
            });
        }
    }

    // Hàm tải xuống
    var downloadImage = function(){
        const image_url = $("#qr-code").attr('src');
        const file_name = "qrcode-thanh-toan.png";

        fetch(image_url)
            .then(response => response.blob()) // Lấy dữ liệu dưới dạng Blob
            .then(blob => {
                const url = URL.createObjectURL(blob); // Tạo Object URL cục bộ
                const a = document.createElement('a');
                
                a.href = url;
                a.download = file_name; 
                document.body.appendChild(a);
                a.click(); // Kích hoạt tải xuống
                
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url); // Dọn dẹp bộ nhớ
            })
            .catch(error => console.error('Lỗi khi tải hình ảnh:', error));
    }

    var copyText = async function(id) {
        const textToCopy = $(id).text();
        try {
            if (id == "#phone-copy") {
                // Sử dụng Clipboard API để ghi nội dung vào clipboard
                await navigator.clipboard.writeText(textToCopy + " RS");
            } else {
                // Sử dụng Clipboard API để ghi nội dung vào clipboard
                await navigator.clipboard.writeText(textToCopy);
            }
            
            
            // Cập nhật thông báo
            $(id + '-status').text('(Đã copy)');

            // Xóa thông báo sau 2 giây
            setTimeout(() => {
                $(id + '-status').text('');
            }, 3000);
        } catch (err) {
            // Xử lý lỗi (ví dụ: trình duyệt không hỗ trợ hoặc bị từ chối quyền)
            console.error('Không thể sao chép:', err);
        }
    }

    var register2 = function(){
        if (jQuery('form#ggcontact2').valid() && flag) {
            // let question1 = getQuestionAnswer2(1);
            // let question2 = getQuestionAnswer(2);
            // let question3 = getQuestionAnswer(3);

            var data = jQuery('form#ggcontact2').serialize();
            console.log(data);
            jQuery('#gg-submit2').val('ĐANG GỬI...');
            
            flag = 0;

            jQuery.ajax({
                type : 'GET',
                url : 'https://script.google.com/macros/s/AKfycbzifWbk9t_k1sOzOZJkdCbki2uvF29t3p3f-S0jqYzSTGkx6-O4Jv6SEtjHp3zVdyI/exec',
                dataType:'json',
                crossDomain : true,
                data : data,
                success : function(data)
                {
                    if(data == 'false')
                    {
                        alert('ERROR, Please try again later!');
                    }else{
                        flag = 1;
                        jQuery('#gg-submit2').val('Gửi thông tin');

                        jQuery('form#ggcontact2')[0].reset();

                        if (data.result == "success") {
                            $.fancybox.close();
                            $("#modal-sucess").fancybox().trigger('click');
                        }
                    }
                }
            });
        }
    }

    var register3 = function(){
        if (jQuery('form#ggcontact3').valid() && flag) {
            var data = jQuery('form#ggcontact3').serialize();
            console.log(data);
            jQuery('#gg-submit3').text('ĐANG GỬI...');
            
            flag = 0;

            jQuery.ajax({
                type : 'GET',
                url : 'https://script.google.com/macros/s/AKfycbzfstO9mndNv_qNo33CombR0Cz4kOcOKVbK-uyE8EMiWR5SQobhkQKEOQWeAb7PmaEX/exec',
                dataType:'json',
                crossDomain : true,
                data : data,
                success : function(data)
                {
                    if(data == 'false')
                    {
                        alert('ERROR, Please try again later!');
                    }else{
                        flag = 1;
                        jQuery('#gg-submit3').text('NHẬN TƯ VẤN');

                        if (data.result == "success") {
                            gtag('event', 'ga-event-shortForm-submit-success'); //send GA
                            fbq('track', 'SYLVA-Marketing-LP-submitSuccess'); //send Meta

                            jQuery('form#ggcontact3')[0].reset();
                            $.fancybox.close();
                            $("#popup-success").fancybox().trigger('click');
                        }
                    }
                }
            });
        }
    }


    var getQuestionAnswer = function(num) {
        let answer = '';

        $('#question'+num+' input[type="checkbox"]').each(function(index, element){
            if($(element).is(":checked")) {
                if(answer) {
                    answer += ' - ';
                }

                answer += $(element).next().text();
            }
        })

        $('#answer' + num).val(answer);
        return answer;
    }

    var getQuestionAnswer2 = function(num) {
        let answer = '';

        $('#question2_'+num+' input[type="checkbox"]').each(function(index, element){
            if($(element).is(":checked")) {
                if(answer) {
                    answer += ' - ';
                }

                answer += $(element).next().text();
            }
        })

        $('#answer2_' + num).val(answer);
        return answer;
    }

    var scrollToContactForm = function() {
        $('html, body').animate({
            scrollTop: $("#ggcontact").offset().top - $('.page-header').height() - 30
        }, 1000);
    }

    var contactFormValidate = function(){

        var contactForm = jQuery('form#ggcontact');
        if (contactForm.length < 1) {
            return;
        }

        jQuery.validator.addMethod("validatePhone", function (value, element) {
            var flag = false;
            var phone = value;
            phone = phone.replace('(+84)', '0');
            phone = phone.replace('+84', '0');
            phone = phone.replace('0084', '0');
            phone = phone.replace(/ /g, '');
            if (phone != '') {
                var firstNumber = phone.substring(0, 3);
                var validNumber = [
                    "032", "033", "034", "035", "036", "037", "038", "039", "086", "096", "097", "098", // Viettel
                    "083", "084", "085", "081", "082", "088", "091", "094", // Vinaphone
                    "070", "079", "077", "076", "078", "089", "090", "093", // Mobifone
                    "056", "058", "092","052", // Vietnamobile
                    "059", "099", // Gmobile
                    "087"]; // Itelecom;
                if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                    if (phone.match(/^\d{10}/)) {
                        flag = true;
                    }
                }
            }
            return flag;
        }, "Invalid phone number format");

        contactForm.validate({
            ignore: "",
            rules: {
                'parent_name': {
                    required: true,
                },
                'child_name': {
                    required: true,
                },
                'phone': {
                    required: true,
                    validatePhone:true,
                },
                'email': {
                    required: true,
                    email: true
                },
                'area': {
                    required: true
                }
            },
            messages: {
                'parent_name': {
                    required: "Vui lòng nhập họ tên phụ huynh"
                },
                'child_name': {
                    required: "Vui lòng nhập họ tên bé"
                },
                'phone': {
                    required: "Vui lòng nhập số điện thoại",
                    validatePhone: "Vui lòng nhập đúng định dạng"
                },
                'email': {
                    required: "Vui lòng nhập email",
                    email: "Vui lòng nhập đúng định dạng email"
                },
                'area': {
                    required: "Vui lòng nhập khu vực sinh sống"
                }
            },
            errorElement : 'p',
            errorClass: 'error',
            errorPlacement: function(error, element) {

                error.insertAfter(element);

            },
            highlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').addClass('error');
            },
            unhighlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').removeClass('error');
            },
        });
    }

    var contactFormValidate2 = function(){

        var contactForm = jQuery('form#ggcontact2');
        if (contactForm.length < 1) {
            return;
        }

        jQuery.validator.addMethod("validatePhone", function (value, element) {
            var flag = false;
            var phone = value;
            phone = phone.replace('(+84)', '0');
            phone = phone.replace('+84', '0');
            phone = phone.replace('0084', '0');
            phone = phone.replace(/ /g, '');
            if (phone != '') {
                var firstNumber = phone.substring(0, 3);
                var validNumber = [
                    "032", "033", "034", "035", "036", "037", "038", "039", "086", "096", "097", "098", // Viettel
                    "083", "084", "085", "081", "082", "088", "091", "094", // Vinaphone
                    "070", "079", "077", "076", "078", "089", "090", "093", // Mobifone
                    "056", "058", "092","052", // Vietnamobile
                    "059", "099", // Gmobile
                    "087"]; // Itelecom;
                if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                    if (phone.match(/^\d{10}/)) {
                        flag = true;
                    }
                }
            }
            return flag;
        }, "Invalid phone number format");

        contactForm.validate({
            ignore: "",
            rules: {
                'name': {
                    required: true,
                },
                'phone': {
                    required: true,
                    validatePhone:true,
                },
                'email': {
                    required: true,
                    email: true
                }
            },
            messages: {
                'name': {
                    required: "Vui lòng nhập thông tin"
                },
                'phone': {
                    required: "Vui lòng nhập số điện thoại",
                    validatePhone: "Vui lòng nhập đúng định dạng"
                },
                'email': {
                    required: "Vui lòng nhập email",
                    email: "Vui lòng nhập đúng định dạng email"
                }
            },
            errorElement : 'p',
            errorClass: 'error',
            errorPlacement: function(error, element) {

                error.insertAfter(element);

            },
            highlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').addClass('error');
            },
            unhighlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').removeClass('error');
            },
        });
    }

    var contactFormValidate3 = function(){

        var contactForm = jQuery('form#ggcontact3');
        if (contactForm.length < 1) {
            return;
        }

        jQuery.validator.addMethod("validatePhone", function (value, element) {
            var flag = false;
            var phone = value;
            phone = phone.replace('(+84)', '0');
            phone = phone.replace('+84', '0');
            phone = phone.replace('0084', '0');
            phone = phone.replace(/ /g, '');
            if (phone != '') {
                var firstNumber = phone.substring(0, 3);
                var validNumber = [
                    "032", "033", "034", "035", "036", "037", "038", "039", "086", "096", "097", "098", // Viettel
                    "083", "084", "085", "081", "082", "088", "091", "094", // Vinaphone
                    "070", "079", "077", "076", "078", "089", "090", "093", // Mobifone
                    "056", "058", "092","052", // Vietnamobile
                    "059", "099", // Gmobile
                    "087"]; // Itelecom;
                if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                    if (phone.match(/^\d{10}/)) {
                        flag = true;
                    }
                }
            }
            return flag;
        }, "Invalid phone number format");

        contactForm.validate({
            ignore: "",
            rules: {
                'name': {
                    required: true,
                },
                'phone': {
                    required: true,
                    validatePhone:true,
                },
                'email': {
                    required: true,
                    email: true
                }
            },
            messages: {
                'name': {
                    required: "Vui lòng nhập thông tin"
                },
                'phone': {
                    required: "Vui lòng nhập số điện thoại",
                    validatePhone: "Vui lòng nhập đúng định dạng"
                },
                'email': {
                    required: "Vui lòng nhập email",
                    email: "Vui lòng nhập đúng định dạng email"
                }
            },
            errorElement : 'p',
            errorClass: 'error',
            errorPlacement: function(error, element) {

                error.insertAfter(element);

            },
            highlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').addClass('error');
            },
            unhighlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').removeClass('error');
            },
        });
    }

    var subscribe = function(){
        if (jQuery('form#subscribe').valid() && flag) {
            var data = jQuery('form#subscribe').serialize();
            console.log(data);
            jQuery('#sub-submit').val('Sending...');
            
            flag = 0;

            jQuery.ajax({
                type : 'GET',
                url : 'https://script.google.com/macros/s/AKfycbxmly7514LLBxDKCCv_QEE_P7ToC6r3RaQi_ak4NfqEsnLikm__AymCNzrH7pfQngY/exec',
                dataType:'json',
                crossDomain : true,
                data : data,
                success : function(data)
                {
                    if(data == 'false')
                    {
                        alert('ERROR, Please try again later!');
                    }else{
                        flag = 1;
                        jQuery('#sub-submit').val('Contact us');

                        if (data.result == "success") {
                            jQuery('form#subscribe')[0].reset();
                            $.fancybox.close();
                            $("#md-tk").fancybox().trigger('click');
                        }
                    }
                }
            });
        }
    }

    var subscribeFormValidate = function(){

        var contactForm = jQuery('form#subscribe');
        if (contactForm.length < 1) {
            return;
        }

        contactForm.validate({
            ignore: "",
            rules: {
                'email': {
                    required: true,
                    email: true
                }
            },
            messages: {
                'email': {
                    required: "Please fill email",
                    email: "Invalid email address"
                }
            },
            errorElement : 'p',
            errorClass: 'error',
            errorPlacement: function(error, element) {

                error.insertAfter(element.parent());

            },
            highlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').addClass('error');
            },
            unhighlight: function (element, errorClass) {
                jQuery(element).closest('.form-group').removeClass('error');
            },
        });
    }

    var getCurrentDate = function() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        let today_format = mm + '/' + dd + '/' + yyyy;
        
        $('.current-date').val(today_format);
    }

    var copyToClipboard = function(num) {
        var $temp = $("<input>");
        $("body").append($temp);
        if (num == 1) {
            $temp.val($("#bank-number").text()).select();
        }

        if (num == 2) {
            $temp.val($("#sms-phonenumber").text()).select();
        }
        
        document.execCommand("copy");
        $temp.remove();
    }

    var phoneChange = function() {
        var phone = $("#phone").val();
        phone = phone.replace('(+84)', '0');
        phone = phone.replace('+84', '0');
        phone = phone.replace('0084', '0');
        phone = phone.replace(/ /g, '');
        if (phone != '') {
            var firstNumber = phone.substring(0, 3);
            var validNumber = [
                "032", "033", "034", "035", "036", "037", "038", "039", "086", "096", "097", "098", // Viettel
                "083", "084", "085", "081", "082", "088", "091", "094", // Vinaphone
                "070", "079", "077", "076", "078", "089", "090", "093", // Mobifone
                "056", "058", "092","052", // Vietnamobile
                "059", "099", // Gmobile
                "087"]; // Itelecom;
            if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                if (phone.match(/^\d{10}/)) {
                    console.log(phone);
                }
            }
        }
    }

    Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
        var n = this,
            decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
            decSeparator = decSeparator == undefined ? "." : decSeparator,
            thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
            sign = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
    };

    var vnd = function(number) {
        return number.formatMoney(0, '.', '.');
    }

    var applyCoupon = function() {
        let code = $('#coupon-code').val().trim().toUpperCase();

        if (code) {
            let discount = money;
            switch (code) {
                case 'VIETSUCCESS': discount = money * 80 / 100; break;
                case 'TRVES': discount = money * 50 / 100; break;
                case 'LTVES': discount = money * 50 / 100; break;
                case 'TNVES': discount = money * 50 / 100; break;
                case 'VES01': discount = money * 50 / 100; break;
                case 'THVES': discount = money * 50 / 100; break;
                case 'TPVES': discount = money * 50 / 100; break;
                case 'DHVES': discount = money * 50 / 100; break;
                case 'MAVES': discount = money * 50 / 100; break;
                case 'TTVES': discount = money * 50 / 100; break;
                case 'THTVES': discount = money * 50 / 100; break;
            }

            if (discount != money) {
                $('#reg-money').html(vnd(discount) + '<sup>vnđ</sup>');
                $('#coupon-code').css({'border-color': 'green'});
                $('#qr-code').attr('src', qr_url + discount);
            } else {
                $('#coupon-code').css({'border-color': 'red'});
            }
        } else {
            $('#coupon-code').css({'border-color': 'red'})
        }
    }

    var hoantatAction = function() {
        setTimeout(function() { $("#modal-sucess").fancybox().trigger('click'); }, 500);
    }

    return {
        register: register,
        register2: register2,
        register3: register3,
        contactFormValidate: contactFormValidate,
        contactFormValidate2: contactFormValidate2,
        contactFormValidate3: contactFormValidate3,
        subscribe: subscribe,
        subscribeFormValidate: subscribeFormValidate,
        getCurrentDate: getCurrentDate,
        copyToClipboard: copyToClipboard,
        phoneChange: phoneChange,
        scrollToContactForm: scrollToContactForm,
        applyCoupon: applyCoupon,
        hoantatAction: hoantatAction,
        downloadImage: downloadImage,
        copyText: copyText
    };

}();    
//--End All site