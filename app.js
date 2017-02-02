$(document).ready();
let servlet = false;
console.log(servlet);

function getShit(){
  let servlet = true;
  $.get( "index2.html", function( data ) {
    $("#app").html( data );
    $('#ajax').hide();
    $('.large').hide();
    console.log("Load was performed.");
  });
}
