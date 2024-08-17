(function ($) {
    "use strict";
    var HT = {};

    HT.seoPreview = () => {
        $('input[name=title]').on('keyup', function () {
            console.log(123);
            let input = $(this)
            let value = input.val()
            $('.meta-title').html(value)
        })


        $('.seo-canonical').each(function () {
            let _this = $(this)
            _this.css({
                'padding-left': parseInt($('.baseUrl').outerWidth()) + 10
            })
        })

        $('input[name=slug]').on('keyup', function () {
            let input = $(this)
            let value = HT.removeUtf8(input.val())
            $('.meta-url').html(BASE_URL + '/bai-viet/' + value + '.html')
        })

        $('textarea[name=meta_description]').on('keyup', function () {
            let input = $(this)
            let value = input.val()
            $('.meta-description').html(value)
        })
    }

    HT.removeUtf8 = (str) => {
        str = str.toLowerCase(); // chuyen ve ki tu biet thuong
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|,|\.|\:|\;|\'|\–| |\"|\&|\#|\[|\]|\\|\/|~|$|_/g, "-");
        str = str.replace(/-+-/g, "-");
        str = str.replace(/^\-+|\-+$/g, "");
        return str;
    }

    HT.renderSlug = () => {
        $('input[name=meta_title]').on('keyup', function () {
            let input = $(this)
            let value = HT.removeUtf8(input.val())
            $('input[name=slug]').val(value)
        })

        $('input[id=title_category]').on('keyup', function () {
            let input = $(this)
            let value = HT.removeUtf8(input.val())
            $('input[id=slug_category]').val(value)
        })

    }




    $(document).ready(function () {
        HT.seoPreview()
        HT.renderSlug()
    });



})(jQuery);
