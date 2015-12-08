$(document).bind('keydown', function(event){
  if (event.which == 39){
    $('#myCarousel').carousel('next')
  }
  else if(event.which == 37){
    $('#myCarousel').carousel('prev')
  }
})
