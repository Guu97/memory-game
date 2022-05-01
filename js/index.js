$(document).ready(function(){
    var open = 0;

    $(".flip-card").click(function(){
        var card = $(this).children(".flip-card-inner");
        if(open<2){
            if(card.hasClass("rotate")){
                open--;
                card.removeClass("rotate");
            }else{
                open++;
                card.addClass("rotate");
            }
        }

        if(open==2){
            setTimeout(function(){
                $(".flip-card-inner").removeClass("rotate");
                open=0;
            },2000); 

        }
        
        
    })
})