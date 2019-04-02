$(
    function(){
  // fix slider height
    var allheight=$(window).height(); 
    var above_nav=$('.above-nav').innerHeight();
    var nav=$('.navbar').innerHeight();
    $('.slider, .carousel-item').height(allheight-(above_nav+nav));
    // feautured work shuffle
    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class')=='All')
        {
        $('.shuffle-imgs .col-sm').css('opacity',1);
        }
        else {
            $('.shuffle-imgs .col-sm').css('opacity','0.08');
            $($(this).data('class')).parent().css('opacity',1);
            
        }
    }
                                
);
});