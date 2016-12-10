$('document').ready(function(){
    $.ajaxSetup ({cache: false});
    $('.submit').click(function() {$( ".container" ).load( "content/output.txt");

    });});