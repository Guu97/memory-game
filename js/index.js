var fruits = [
    "ananas",
    "apple",
    "banana",
    "carrot",
    "cherry",
    "eggplant",
    "grape",
    "lemon",
    "orange",
    "peach",
    "pear",
    "strawberry",
    "watermelon"
];

var coppie;
var firstCard;
var secondCard;
var open = 0;
$(document).ready(function(){
    $("#win").hide();

    $("#play-btn").click(function(){
        $("#win").hide();
        var num = $("#select-coppie").val();
        if(num!="-1"){
            coppie=num;
            $("#game-container").hide();
            generate(num);
            setTimeout(function(){
                
                $("#game-container").fadeIn(750);
            },500); 
            
            
            
        }
    })

    /*$("#select-coppie").change(function(){
        var num = $("#select-coppie").val();
        generate(num);
    })*/

    $("body").on("click",".flip-card", function(){

    /*})
    $(".flip-card").click(function(){*/
        var card = $(this).children(".flip-card-inner");
        if(open<2){
            if(!card.hasClass("rotate")){
                open++;
                if(open==1){
                    firstCard=$(this);
                }
                if(open==2){
                    secondCard=$(this);
                }
                card.addClass("rotate");
            }
        }

        if(open==2){
            
            if(firstCard.attr("data")==secondCard.attr("data")){
                coppie--;
                firstCard.children(".flip-card-inner").addClass("found");
                secondCard.children(".flip-card-inner").addClass("found");
                firstCard="";
                secondCard="";
                open=0;

                if(coppie==0){
                    setTimeout(function(){
                        $("#win").fadeIn(500);
                    },750); 
                }
            }else{

                setTimeout(function(){
                    $(".flip-card-inner:not(.found)").removeClass("rotate");
                    open=0;
                },2000); 
            }

        }
        
        
    })
})

function generate(num){
    //characters.charAt(Math.floor(Math.random() * charactersLength));
    //creazione array oggetti delle coppie
    var use = [];
    for(var i=0;i<num; i++){
        var obj = fruits[Math.floor(Math.random() * fruits.length)];
        //var obj = ["",0];
        /*obj[0] = fruits[Math.floor(Math.random() * fruits.length)];*/
        if(!use.includes(obj)){
            use.push(obj);
        }else{
            i--;
        }
    }
    var table = [];
    for(var i=0;i<use.length;i++){
        var x = [use[i],0];
        table.push(x);
    }

    var backup = table;
    var cards = "";
    while(table.length!=0){
        var index = Math.floor(Math.random() * table.length);
        var single = '<div class="flip-card" data="'+table[index][0]+'">'
                        + '<div class="flip-card-inner">'
                            + '<div class="flip-card-front">'
                            +'</div>'
                            +'<div class="flip-card-back">'
                                +'<img src="img/'+table[index][0]+'.png">'
                            +'</div>'
                        +'</div>'
                    +'</div>';
        cards = cards + single;
        table[index][1] = table[index][1]+1;
        if(table[index][1]==2){
            table.splice(index,1);
        }
          
    }

    $("#game-container").empty();
    $("#game-container").append(cards);

}