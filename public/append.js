
$(document).ready(function(){
    function checkChoice() {
        var choice = $("#choice1").val();
        
        switch(choice) {
            case "Directors":
            $(".a1").html(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice").html([
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director1"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director2"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director3"})
            ]);
            break;
            case "Actors":
            $(".a1").html(" <b>Name your 3 favorite actors in the fields below</b>.");
            $(".secondChoice").html([
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor1"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor2"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor3"})
            ]);
            break;
            case "Awards":
            $(".a1").empty();
            $(".secondChoice").empty();
            break;
            
            case "Critics Ratings":
            $(".a1").empty();
            $(".secondChoice").empty();
            break;
            
            case "Box Office":
            $(".a1").empty();
            $(".secondChoice").empty();
            break;
            
            case "Release Date":
            $(".a1").empty();
            $(".secondChoice").empty();
            break;
            console.log(choice);
        }   
    }
    
    $('#choice1').on('change',function() {
        console.log($(this).val());
        checkChoice();
    });
    
    function checkChoice2() {
        var choice2 = $("#choice2").val();
        
        switch(choice2) {
            case "Directors":
            $(".a2").html(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice2").html([
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director1"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director2"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director3"})
            ]);
            break;
            case "Actors":
            $(".a2").html(" <b>Name your 3 favorite actors in the fields below</b>.");
            $(".secondChoice2").html([
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor1"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor2"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor3"})
            ]);
            break;
            case "Awards":
            $(".a2").empty();
            $(".secondChoice2").empty();
            break;
            
            case "Critics Ratings":
            $(".a2").empty();
            $(".secondChoice2").empty();
            break;
            
            case "Box Office":
            $(".a2").empty();
            $(".secondChoice2").empty();
            break;
            
            case "Release Date":
            $(".a2").empty();
            $(".secondChoice2").empty();
            break;
            console.log(choice2);
        }   
    }
    
    $('#choice2').on('change',function() {
        console.log($(this).val());
        checkChoice2();
    });
    function checkChoice3() {
        var choice3 = $("#choice3").val();
        
        switch(choice3) {
            case "Directors":
            $(".a3").html(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice3").html([
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director1"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director2"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"director3"})
            ]);
            break;
            case "Actors":
            $(".a3").html(" <b>Name your 3 favorite actors in the fields below</b>.");
            $(".secondChoice3").html([
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor1"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor2"}),
                $('<input>', {type: 'text',val: $('#div1').text(),id:"actor3"})
            ]);
            break;
            case "Awards":
            $(".a3").empty();
            $(".secondChoice3").empty();
            break;
            
            case "Critics Ratings":
            $(".a3").empty();
            $(".secondChoice3").empty();
            break;
            
            case "Box Office":
            $(".a3").empty();
            $(".secondChoice3").empty();
            break;
            
            case "Release Date":
            $(".a3").empty();
            $(".secondChoice3").empty();
            break;
            console.log(choice);
        }   
    }
    
    $('#choice3').on('change',function() {
        console.log($(this).val());
        checkChoice3();
    });
    
});
