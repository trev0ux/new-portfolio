$(document).ready(function () {
    $('.filter').click(function () {
        var category = $(this).attr('id');
        if (category == "all") {
            $('.card_item').show('8000');
        } else {
            $('.card_item').not('.'+category).hide('fast');
            $('.card_item').filter('.'+category).show('8000');
        }
        $(document).on('click', 'ul li', function(){
            $(this).addClass('active').siblings().removeClass('active')
        });
    });
});


var preloader = document.getElementsByClassName('preload');
$(window).ready(function() {
    $(preloader).fadeOut("slow");
 });

  
 function redirecionar() {
    window.location.href = "/entropia";
 }

  /*  $(document).ready(function () {
        $('.filter').click(function () {
            var category = $(this).attr('id');

            if (category == "all") {
                $('.card_item').addClass('hide');
                setTimeout(function(){
                    $('.card_item').removeClass('hide');
                }, 300);
            } else {
                $('.card_item').addClass('hide');
                setTimeout(function(){
                    $('.'+category).removeClass('hide');
                }, 300);
            }
        });
    }); */


$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')

});




$(document).ready(function(){
    var menu = document.getElementById("nav-icon3");
    var nav = document.getElementById("nav");
    $(menu).click(function(e){ 
       $(this).toggleClass("open");   
       $(nav).toggle("show");
       e.preventDefault();
    });
});


function openFilterNav() {
    document.getElementById("menu-filter").style.width = "287px";
    $('#opacity').addClass('sidenav_background');

  }

  
  function closeNav() {
    document.getElementById("menu-filter").style.width = "0";
    $('#opacity').removeClass('sidenav_background');
  }