$(document).bind('keyup', function(event){
  if (event.which == 39){
    $('.carousel').carousel('next')
  }
  else if(event.which == 37){
    $('.carousel').carousel('prev')
  }
})
