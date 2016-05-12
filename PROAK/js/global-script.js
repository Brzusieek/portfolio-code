$(document).ready(function(){

    /*---------------------- GLOBAL VAR's ----------------------*/

    /**
     * statusCollapse - stores the status (on / off) class "header-collapsed", which prevents unnecessary re-adding the class.
     * windowWidth - stores outerWidth of window
     * windowHeight - stores outerHeight of height
     */
    var statusCollapse = 0,
        windowWidth,
        windowHeight,
        body = $('body');


    /*---------------------- FUNCTIONS ----------------------*/

    /**
     * windowHeightWidth() - setting global vars windowWidth and windowHeight
     */
    function windowHeightWidth(){
        windowWidth = $(window).outerWidth();
        windowHeight = $(window).outerHeight();
    }//windowHeightWidth();
    /**
     * Sets first section's height equal to window's height
     *
     * @class heightSlider
     */
    function heightSlider() {
        $('#main-slider .slider-item').css({
            'height': windowHeight
        });
    };//heightSlider();


    /**
     * Adds/removes the specified class 'scrolled' on the element body during the scrolling page.
     *
     * @class headerToogle
     */
    function headerToogle() {

        var header$ = $('header#header');

        /**
         * Decides about adding or removing class on header only once, during the scrolling page.
         * If statement's recoginze situations when requires removing or adding class
         * If(statusCollapse == 0 && arg == 1) - is working only when header.offset is less then 50px and we scroll down the page.
         * else if(statusCollapse == 1 && arg == 0) - is working only when header.offset is changing from more 50px to less 50px.
         * @method setOnOff
         * @param arg
         */
        function setOnOff(arg) {

            if(statusCollapse == 0 && arg == 1) {

                statusCollapse = 1;
                header$.addClass('header-collapsed');

                body.append('<span class="scroll-up" title="Do góry"><i class="fa fa-angle-up"></i></span>').find('.scroll-up').hide().fadeIn(800);

            } else if(statusCollapse == 1 && arg == 0) {

                statusCollapse = 0;
                header$.removeClass('header-collapsed');
                body.find('.scroll-up').fadeOut(800, function(){
                    $(this).remove()
                });
            }

        }

        if(header$.offset().top > 50 || header$.outerWidth() < 568)
            setOnOff(1)
        else setOnOff(0);

    };//headerToogle();


    /**
     * Setting height on parent's element with class '.item-description' of each element with class 'first'.
     * Result is box with visibility only element with class 'first'.
     *
     * @class textCollapseShowHide
     */
    function textCollapseShowHide() {

        $('.first').each(function(){

            var $firstChild = $(this),
                itemDescMaxHeight;

            itemDescMaxHeight = $firstChild.outerHeight();

            $(this).parent(".item-description").css("maxHeight", itemDescMaxHeight);

        });

    };//textCollapseShowHide();

    /**
     * Adding or removing class 'header-collapsed' during resize window, if window's width is less than 768 function add class.
     * In another case function checks header's offset. When it is less than 50px class 'header-collapsed' is removing.
     *
     * @class headerClass
     */
    function headerClass() {
        var header$ = $('header#header');

        if(windowWidth < 768) {
            header$.addClass("header-collapsed");
        } else {
            if(header$.offset().top < 50)
                $(".main-header").removeClass("header-collapsed");
        }
    }//headerClass

    /**
     * Setting closed section's height only for mobile(less than 768px).
     * Height is equal to (2 * data-padding + header)
     * data-padding is value from attribute of each section which we set in html code.
     * header is height of main title of section.
     *
     * @class headerMobileHeight
     */
    function headerMobileHeight() {
        var body$ = $('body');

        if(windowWidth < 768) {

            if (!body$.hasClass('sh-collapsed')) {

                body$.addClass('sh-collapsed').removeClass('s-normal');
                $('section').each(function(){
                    if(!$(this).hasClass('carousel')){
                        var hSection = 2*parseInt($(this).attr('data-padding'))
                            + parseInt($(this).children('header').children('h1').outerHeight());
                        $(this).css({"height": hSection, "padding": "10px 0"}).addClass('close-section').removeClass('open-section');
                    }
                });
            }


        } else {
            if (!body$.hasClass('s-normal')) {
                body$.removeClass('sh-collapsed').addClass('s-normal');
                $('.b-close-section').remove();
                $('section').each(function(){
                    if(!($(this).hasClass('carousel'))){
                        $(this).removeClass('close-section').removeClass('open-section');
                    }
                });
            }
        }
    };//headerMobileHeight

    /**
     * This API is adding class on each ul element inside div with class 'set-ul-green-square'
     * The main goal is adding green square on each li element instead of normal black circle.
     * This is working automatically on text which is adding dynamically from cms.
     *
     * @class AddingGreenSquare
     */
    $('div.set-ul-green-square').each(function(){
        $('ul').addClass('ul-green-square');
    });

    //-------------------------------EVENTS--------------------------------

    /**
     * This event is working only when we clicked '.read-more'.
     * After the click our height of box with text is changing from intro msg to normal height and we see all of text which we wrote.
     *
     * IMPORTANT: It is working properly only when we have correct structure of box in html.
     *
     * @class CollapseLongSelectedSection
     */
    $('.read-more').click(function(){

        var $firstChild,
            itemDescMaxHeight;

        $firstChild = $(this).siblings('.item-description')
            .children('.first');
        itemDescMaxHeight = $firstChild.outerHeight();//setHeightItemDesc($firstChild);

        if(
            $(this).parent('.text-collapse')
                .hasClass("active")
        ) {

            $(this).html("Czytaj więcej...")
                .siblings('.item-description')
                .css("maxHeight",itemDescMaxHeight)
                .parent(".text-collapse")
                .removeClass('active');
        } else {

            $(this).html("Zwiń")
                .siblings('.item-description')
                .css("maxHeight",'none')
                .parent(".text-collapse")
                .addClass('active');
        }

    });

    $('.nav-button').click(function(){
        $('nav').toggleClass('nav-collapsed');
    });

    /**
     * This event provides smooth scrolling between sections on page.
     *
     * @class SmoothScrolling
     */
    $('.nav li a, .scroll-down, .carousel-caption a, .page-title a').click(function(){
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top-90
        },800);
    });

    /**
     * This event is working only on mobile device(less than 768px) and after click button "Zwiń sekcje",
     * the selected section changes current height on minimal height.
     * Height is equal to (2 * data-padding + header)
     * data-padding is value from attribute of each section which we set in html code.
     * header is main title of section.
     *
     * @class CollapsingHeaderOnMobileByClickButton
     */
    $('section').on('click','.b-close-section', function(){
        var ppSec = $(this).parent('section'),
            hCloseSection = 2*parseInt(ppSec.attr('data-padding'))
                + parseInt($(this).siblings('header').children().outerHeight());

        /**
         * @method anonimeFunction
         *
         * Delete button 'Zwiń sekcje' and close section.
         */
        (function(){
            ppSec.animate({padding: "10px 0"}, 500, function(){
                $(this).animate({height: hCloseSection},800).addClass('close-section').removeClass('open-section');
            });
            ppSec.find(".b-close-section").remove();

            $('html,body').animate({
                scrollTop: ppSec.offset().top-100
            },800);
        })()
    });


    /**
     * This event is working only on mobile device(less than 768px) and after click main header of section,
     * the selected section changes current height from minimal to normal or from normal to minimal.
     * hCloseSection is equal to (2 * data-padding + header)
     * hOpenSection is equal to (actual height of section + 2 * data-padding + height of whole article)
     * data-padding is value from attribute of each section which we set in html code.
     * header is main title of section.
     *
     * @method CollapsingHeaderOnMobileByClickHeader
     */
    body.on('click','header h1.title-section', function(){

        var ppSec = $(this).parent().parent('section'),
            psArt = $(this).parent().siblings('article'),
            hCloseSection = 2*parseInt(ppSec.attr('data-padding'))
                + parseInt($(this).outerHeight()),
            hOpenSection = parseInt(ppSec.outerHeight())
                + 2*parseInt(ppSec.attr('data-padding'))
                + parseInt(psArt.outerHeight()),
            bCloseSection = "<span class='b-close-section'>Zwiń sekcje</span>";

        function openSection($this){

            $('html,body').animate({
                scrollTop: $($this).offset().top-100
            },800);

            ppSec.animate({height: hOpenSection},800, function(){
                $(this).css("height", 'auto').animate({padding: "40px 0" },500);
            }).removeClass('close-section').addClass('open-section').append(bCloseSection);
        }

        function closeSection($this){
            ppSec.animate({padding: "10px 0"}, 500, function(){
                $(this).animate({height: hCloseSection},800).addClass('close-section').removeClass('open-section');
            });
            ppSec.find(".b-close-section").remove();
        }


        /*
         * This code decides about running action.
         */
        if(ppSec.hasClass('close-section')){
            openSection(this);
        } else {
            closeSection(this);
        }

    });

    body.on('click','.scroll-up', function(){
        $('html,body').animate({
            scrollTop: 0
        },800);
    });

    /**
     * This event is working only on mobile device(less than 768px) and after click img with class '.collapse-section',
     * The function headerMobileHeight is run and page is scrolling to top.
     *
     * RESULT: we have short basic view of all sections on page in the form of tile.
     */
    $('img.collapse-section').click(function(){
        $('body').removeClass('sh-collapsed');
        headerMobileHeight();

        $('html,body').animate({
            scrollTop: $('#training').offset().top-100
        },800);
        $('.b-close-section').remove();
    });


    $(window).resize(function(){
        windowHeightWidth();
        heightSlider();
        textCollapseShowHide();
        headerToogle();
        headerClass();
        headerMobileHeight();

    });

    $(window).scroll(function () {

        if(windowWidth >= 768) {
            headerToogle();
        }

    });

    //-------------------------------INIT PLUGINS--------------------------------

    $('#main-slider').carousel({
        interval: 100000,
        pause: false
    });

    $('.cert').venobox({
        framewidth: '',        // default: ''
        frameheight: '',       // default: ''
        border: '0',             // default: '0'
        bgcolor: 'transparent',         // default: '#fff'
        numeratio: false,            // default: false
        infinigall: true            // default: false
    });

    $('.refe').venobox({
        framewidth: '',        // default: ''
        frameheight: '',       // default: ''
        border: '0',             // default: '0'
        bgcolor: 'transparent',         // default: '#fff'
        numeratio: false,            // default: false
        infinigall: true            // default: false
    });


    //-------------------------------RUN FUNCTION--------------------------------
    windowHeightWidth();
    headerMobileHeight();
    headerClass();
    heightSlider();
    headerToogle();
    textCollapseShowHide();



});//document ready