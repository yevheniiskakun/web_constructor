// Require <script src="http://thetheme.io/thesaas/assets/js/page.min.js"></script>

$('.counter-count').each(function (){
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });