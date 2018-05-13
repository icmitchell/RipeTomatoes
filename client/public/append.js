
$(document).ready(function(){
    function checkChoice() {
        var choice = $("#choice1").val();
        
        switch(choice) {
            case "Directors":
            $(".a1").append(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice").append([
                $('<input>', {type: 'text',val: $('#div1').text()}),
                $('<input>', {type: 'text',val: $('#div1').text()}),
                $('<input>', {type: 'text',val: $('#div1').text()})
            ]);
            break;
            case "Actors":
            $(".a1").append(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice").append([
                $('<input>', {type: 'text',val: $('#div1').text()}),
                $('<input>', {type: 'text',val: $('#div1').text()}),
                $('<input>', {type: 'text',val: $('#div1').text()})
            ]);
            break;
            case "Awards":
            break;
            
            case "Critics Ratings":
            break;
            
            case "Box Office":
            break;
            
            case "Release Date":
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
            $(".a2").append(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice2").append([
                $('<input>', {type: 'text',val: $('#div2').text()}),
                $('<input>', {type: 'text',val: $('#div2').text()}),
                $('<input>', {type: 'text',val: $('#div2').text()})
            ]);
            break;
            case "Actors":
            $(".a2").append(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice2").append([
                $('<input>', {type: 'text',val: $('#div2').text()}),
                $('<input>', {type: 'text',val: $('#div2').text()}),
                $('<input>', {type: 'text',val: $('#div2').text()})
            ]);
            break;
            case "Awards":
            break;
            
            case "Critics Ratings":
            break;
            
            case "Box Office":
            break;
            
            case "Release Date":
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
            $(".a3").append(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice3").append([
                $('<input>', {type: 'text',val: $('#div3').text()}),
                $('<input>', {type: 'text',val: $('#div3').text()}),
                $('<input>', {type: 'text',val: $('#div3').text()})
            ]);
            break;
            case "Actors":
            $(".a3").append(" <b>Name your 3 favorite directors in the fields below</b>.");
            $(".secondChoice3").append([
                $('<input>', {type: 'text',val: $('#div3').text()}),
                $('<input>', {type: 'text',val: $('#div3').text()}),
                $('<input>', {type: 'text',val: $('#div3').text()})
            ]);
            break;
            case "Awards":
            break;
            
            case "Critics Ratings":
            break;
            
            case "Box Office":
            break;
            
            case "Release Date":
            break;
            console.log(choice);
        }   
    }
    
    $('#choice3').on('change',function() {
        console.log($(this).val());
        checkChoice3();
    });
    
});