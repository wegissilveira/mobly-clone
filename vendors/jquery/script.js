$(function(){
    $("#includedHeader").load("../../shared/header.html"); 
});

$(function(){
    $("#includedFooter").load("../../shared/footer.html"); 
});

$(document).ready(function(){
    $.getScript( "../../data/mainSliderData.js", function( data ) {
        console.log(returnData())
    }) .fail(function( jqxhr, settings, exception ) {
        console.log('error:')
        console.log(exception)
    })
}) 


