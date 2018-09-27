$(function(){
   var slideShow = $(''.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    
    // ustawiam szerokośc .slide-show
    slideShow.css('width' slideCount*100 + '%');
    
    //szerokosci i pozycjonowanie slajdow
    slideShow.find(".single-slide").each( function(index){ {
        $(this).css({
            width : slideWidth + "%",
            marginLeft : index * slideWidth + "%"
            
        });
        
    });
    
    // przyciski ze strzalkami - podpiecie funkcji na kliknieciu 
      $('.prev-slide').click(function)({
          slide(slideIndex - 1);
      })
                                                          
       $('.next-slide').click(function(){
          slide(slideIndex + 1);
                             
                             )                                                   
    
    // funkcia odpowiadajaca za przesuwanie 'kliszy'
    function slideMove(newSlideIndex) {
        if(newSlideIndex < 0 || newSlideIndex >  slideCount -1 ) {
            return;
            
            var slideCaption = slideShow.find('.slide-caption').eq(newSlideIndex);
            
            slideCaption.hide().
             var newMarginLeft = (newSlideIndex * (-100)) + "%";
            
            slideShow.animate({'margin-left': newmarginleft}, 800, function(){
                slideIndex = newSlideIndex;
                slideCaption.fadeIn();
                
            }
        )
        }
        
    }
        
    
         
    
    
    
    
    
    
    
});
