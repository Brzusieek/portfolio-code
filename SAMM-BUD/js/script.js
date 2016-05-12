/**
 * Created by Michał Brzuchacz.
 *
 * The documentation prepared for generating in YUIDoc.
 */
$(document).ready(function(){
    
    /*--------------------------GLOBAL VARS--------------------------*/
    var _statusCollapse = 0,
        $header = $('header'),
        $body = $('body'),
        $menuIcon = $('#menu-mobile-trigger'),
        $window = $(window);

    /*--------------------------FUNCTIONS--------------------------*/
    /**
     * Adds/removes the specified class 'scrolled' on the element body during the scrolling page.
     *
     * @class headerToogle
     */
    function headerToogle(){

        var _hHeader = $header.outerHeight();

        /**
         * It provides protection from repeatedly adding class.
         * Decides about adding or removing class on header only once, during the scrolling page.
         *
         * If statement's recoginze situations when requires removing or adding class
         * If(statusCollapse == 0 && arg == 1) - is working only when header.offset is less then 50px and we scroll down the page.
         * else if(statusCollapse == 1 && arg == 0) - is working only when header.offset is changing from more 50px to less 50px.
         *
         * @method setOnOff
         * @param arg {Number} Value which stores offset status of scrolling page - only 1 or 0.
         */

        function setOnOff(arg) {
            if(_statusCollapse === 0 && arg === 1) {
                _statusCollapse = 1;
                $body.addClass('scrolled');
            } else if(_statusCollapse === 1 && arg === 0) {
                _statusCollapse = 0;
                $body.removeClass('scrolled')
            }
        }

        $header.offset().top > _hHeader ? setOnOff(1) : setOnOff(0);

    } //headerToogle();

    /**
     * Sets first section's height equal to window's height
     *
     * @class heightSlider
     */
    function heightSlider() {

        var _windowHeight = $window.outerHeight();

        $('#main-slider').css({
            'height': _windowHeight
        });

    }//heightSlider()

    /*--------------------------EVENTS--------------------------*/
    $(window).scroll(function(){
        headerToogle();
    });

    $(window).resize(function(){
        heightSlider();
    });

    $menuIcon.click(function() {
        $menuIcon.toggleClass("open").parent().toggleClass("open");
    });

    /**
     * It provides smooth scrolling after the click on the button
     */
    $('#scroll-down').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top-70
        },800);
    });


    /*--------------------------FUNCTIONS INIT--------------------------*/

    $('#container-slider').fadeSlideShow({
        speed: 'slow',
        interval: 4000,
        autoplay: true,
        width: '100%', // default width of the slideshow
        height: '100%' // default height of the slideshow
    });
    $('#fssPrev,#fssNext,#fssPlayPause,#fssList').remove();

    heightSlider();

});
