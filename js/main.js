

$(window).scroll(function(){

 let spaceFromTop = $('#About').offset().top;
 let heightOfNav  =$('#navbar1').outerHeight()
console.log(heightOfNav,spaceFromTop-heightOfNav);
    if($(window).scrollTop()  > spaceFromTop -heightOfNav-30   ){

      $('#navbar1').fadeOut(100, function(){
    
        $('#navbar2').fadeIn(100)
      })


    }
    else{
      $('#navbar2').fadeOut(50, function(){
    
        $('#navbar1').fadeIn(50)
      })
    }

})


window.addEventListener('load', function(){

      $('.loadingScreen').fadeOut(1200, function(){

        $('body,html').css('overflow' ,'visible')

      })

})