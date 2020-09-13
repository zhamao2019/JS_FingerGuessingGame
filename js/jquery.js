$(document).ready(function( ) {

    // actions for select finger types
    $("#choiceH").on("click", function(){
        $("#choiceH").addClass("green-border");
        $("#choiceS,#choiceP").removeClass("green-border");
        $("#finalChoice").attr("src",'./img/O.png');
    });

    $("#choiceS").on("click", function(){
        $("#choiceS").addClass("green-border");
        $("#choiceH,#choiceP").removeClass("green-border");
        $("#finalChoice").attr("src",'./img/Y.png');
    });
    $("#choiceP").on("click", function(){
        $("#choiceP").addClass("green-border");
        $("#choiceS,#choiceH").removeClass("green-border");
        $("#finalChoice").attr("src",'./img/X.png');
    });

});