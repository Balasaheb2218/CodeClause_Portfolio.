$(document).ready(function(){
    $(window).scroll(function(){
        console.log(this)
        if(this.scrollY > 0){
            $('.navbar').addClass("sticky");
     }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed=new Typed(".typing", {
        strings: ["Developer", "Designer","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed=new Typed(".typing-2", {
        strings: ["Developer", "Designer","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});