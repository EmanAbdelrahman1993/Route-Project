

$(function()
{
  'use strict';

  // /* Header Height */
  // $('header').height($(window).height());

  // alert($(window).height());

  // $(window).resize(function()
  // {
  //   $('header').height($(window).height());

  //   /* Make header container center */

  //   //  $("header .container").css('top',($(window).height() - $('header .container').height()) / 2);
  //   //  $("header .container").css('left',($(window).width() - $('header .container').width()) / 2);

  //    /* End Of Header Container */

  // })

  // /* End Header Height*/

  /* Start Add Links active class */

  $(".navbar .nav-link").click( function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
 });

/* End Add Links active class */

/* Make header container center */
//  $("header .container").css('top',($(window).height() - $('header .container').height()) / 2);
//  $("header .container").css('left',($(window).width() - $('header .container').width()) / 2);
/* End Of Header Container */


/* Scroll up page  arrow*/

$(window).scroll(function(){
    
  var scrTop = $(window).scrollTop();
  if(scrTop >500)
  {
      $("#btnUpDown").fadeIn(200);
  }
  else
  {
      $("#btnUpDown").fadeOut(200);
  }
  
  
})

$("#btnUpDown").click(function(){
  
  $("body").animate({scrollTop:'0'} , 1000)
})
/*End of arrow up */

$(document).ready(function()
{
    $("#loading-screen i").fadeOut(2000 , function()
    {
        $(this).parent().fadeOut(2000 , function()
        {
            $("body").css("overflow","auto")
            
        })
        
    })
})
/* Smooth scroll to div */
$('header .icon .section_scroll').click(function()
{
 
    $('html , body').animate({
      scrollTop: $('#some-project').offset().top
    }, 1000);
});

});