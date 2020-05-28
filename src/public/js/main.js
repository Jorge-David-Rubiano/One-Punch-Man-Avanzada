$(document).ready(function(){
  $('.card').mouseleave(function(){
     $(this).css({       
       'opacity':'.9'
     });
  });

 
   $('nav a').each(function(index, elemento){
       $(this).css({
         'top': '-200px'          
       });
        $(this).animate({
         'top': '0'
       },1300 + (index * 200));
  });
});