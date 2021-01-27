$(document).ready(function (){
    // NavBar
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass('active')
        }
        else
        {
            $('.navbar').removeClass('active')
        }
    })

    // NavBar Dropdown toggle when click
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.navbar .icon i').toggleClass('active')
    });

    // NavBar DropDown
    $('.icon').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.navbar .icon i').toggleClass('active')
    });

    // Section Scroll Animation
    jQuery(document).on("click",".navbar .menu li a",function(event){
        event.preventDefault();
        let href =jQuery(this).attr("href");
        let url = href.substr(href.indexOf("#"));
        jQuery('html, body').animate({
            scrollTop: $(url).offset().top
        }, 400);
    });
    
    // Resume Button
    $('#cv').click(function(e){
        e.preventDefault();
    window.location.href = './files/Resume_Andallo.pdf';
    });

    // Typing Animation
    // var navbar = new Typed(".portfolio", {
    //     strings: ["folio"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    // var home = new Typed(".typing", {
    //     strings: ["Web Developer"],
    //     typeSpeed: 80,
    //     backSpeed: 60,
    //     loop: true
    // });

})