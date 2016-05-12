$(document).ready(function(){

    /*---------------------- GLOBAL VAR's ----------------------*/

    /**
     * windowWidth - stores outerWidth of window
     * windowHeight - stores outerHeight of height
     */
    var windowWidth,
        windowHeight,
        statusScrollUp = 0,
        media = $('#media');

    /*---------------------- FUNCTIONS ----------------------*/
    /**
     * windowHeightWidth() - setting global vars windowWidth and windowHeight
     *
     * @class windowHeightWidth
     */
    function windowHeightWidth(){
        windowWidth = $(window).outerWidth();
        windowHeight = $(window).outerHeight();
    }//windowHeightWidth();

    /**
     * Sets first section's height equal to window's height
     *
     * @class updateHeWiSlider
     */
    function updateHeWiSlider() {
        $('#slider').css({
            'height': windowHeight*1/2
        });
    };//updateHeightWidthMain();

    
    function scrollUp(){

        var header$ = $('header#header');

        function setOnOff(arg) {

            if(statusScrollUp == 0 && arg == 1) {

                statusScrollUp = 1;
                $('body').append('<span class="scroll-up" title="Do góry"><i class="fa fa-angle-up"></i></span>').find('.scroll-up').hide().fadeIn(800);

            } else if(statusScrollUp == 1 && arg == 0) {

                statusScrollUp = 0;
                $('body').find('.scroll-up').fadeOut(800, function(){
                    $(this).remove()
                });
            }

        }

        if(header$.offset().top > 50)
            setOnOff(1);
        else setOnOff(0);

    };

    $(window).resize(function(){
        updateHeWiSlider();
        windowHeightWidth();
    });

    $(window).scroll(function () {

    });

    //------------------------------- EVENTS ------------------------------------
    $('.nav-button').click(function(){
        $('nav').toggleClass('nav-collapsed');
    });


    /**
     * This event provides smooth scrolling between sections on page.
     */
    $('.nav li a, .scroll-down, .carousel-caption a, .page-title a').click(function(){
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top-90
        },800);
    });

    //-------------------------------INIT PLUGINS--------------------------------
    $('.item-gallery img').click(function(){
        var $display = $('.gallery-display'),
            $this =  $(this),
            name = $this.attr('data-name-gallery'),
            count = $this.attr('data-count-item'),
            title = $this.siblings('p').html(),
            //urlHost = 'http://localhost/blog-g',
            urlHost = 'http://proak.mbrzuchacz.nazwa.pl',
            url = urlHost+'/wp-content/themes/proak/assets/page-galeria/js/get-gallery.php?namegallery=' +name+'&count='+count+"&title="+title;

        $.ajax({
            url: url,
            cache: false
        }).done(function( msg ) {
            $display.html(msg);
            preloadFirst();

            $('html,body').animate({
                scrollTop: $display.offset().top-100
            },800);

            $('.vbox-item').venobox({
                framewidth: '',        // default: ''
                frameheight: '',       // default: ''
                border: '0',             // default: '0'
                bgcolor: 'transparent',         // default: '#fff'
                numeratio: false,            // default: false
                infinigall: true            // default: false
            });

        }).fail(function() {
            $display.html('<p class="error"> Wystąpił błąd podczas wczytywania galerii</p>');
        })
    });

    function preloadFirst(){
        $('.gallery-display').find('img').one('load', function() {
            $(this).parent('.item-gallery').removeClass('loading')
        }).each(function() {
            if(this.complete) $(this).load().parent('.item-gallery').removeClass('loading');
        });
    }



    //-------------------------------RUN FUNCTION--------------------------------
    $('#header').addClass('header-collapsed');
    windowHeightWidth();
    updateHeWiSlider();
    scrollUp();


});//document ready