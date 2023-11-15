$(function(){
    $('nav>ul').mouseenter(function(){
                $('.bg').slideDown(200)
            })

    $('nav>ul').mouseleave(function(){
                $('.bg').slideUp(200)
            }) 

    $('.slefttop').click(function(e){
            e.preventDefault();
             $('html, body').stop().animate({
                scrollTop : 0
            },1000)
        })
    
    //////////////////////////////////////////////////
    $('.newmenu').click(function(){
      $('.new').show()
      $('.best').hide()
      $('.salad').hide()
      $('.smilesub').hide()
      $('.vegan').hide()
      $('.under1').show()
    })

    $('.bestmenu').click(function(){
      $('.best').show() 
      $('.new').hide()
      $('.salad').hide()
      $('.smilesub').hide()
      $('.vegan').hide()
      $('.under1').hide()
      $('.under2').show()
    })
    $('.saladmenu').click(function(){
      $('.salad').show()
      $('.new').hide()
      $('.best').hide()
      $('.smilesub').hide()
      $('.vegan').hide()
    })
    $('.smilesubmenu').click(function(){
      $('.smilesub').show()
      $('.new').hide()
      $('.salad').hide()
      $('.best').hide()
      $('.vegan').hide()
    })
    $('.veganmenu').click(function(){
      $('.vegan').show()
      $('.new').hide()
      $('.salad').hide()
      $('.smilesub').hide()
      $('.best').hide()
    })

/////////////////////////////////////////////////////////////////////
    $('.newmenu').click(function(){
      $('.newunder').show()
      $('.bestunder').hide()
      $('.saladunder').hide()
      $('.subunder').hide()
      $('.veganunder').hide()
    })

    $('.bestmenu').click(function(){
      $('.bestunder').show()
      $('.newunder').hide()
      $('.saladunder').hide()
      $('.subunder').hide()
      $('.veganunder').hide()
    })
    $('.saladmenu').click(function(){
      $('.saladunder').show()
      $('.newunder').hide()
      $('.bestunder').hide()
      $('.subunder').hide()
      $('.veganunder').hide()
    })
    $('.smilesubmenu').click(function(){
      $('.subunder').show()
      $('.newunder').hide()
      $('.saladunder').hide()
      $('.bestunder').hide()
      $('.veganunder').hide()
    })
    $('.veganmenu').click(function(){
      $('.veganunder').show()
      $('.newunder').hide()
      $('.saladunder').hide()
      $('.subunder').hide()
      $('.bestunder').hide()
    })
  })


