console.log('Can you tell me if i am there '); //Dont remove this line this line just only for seeing if the below code is running properly or not and for seeing if the external link is working or not

//sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {};
    var instances = M.Sidenav.init(elems, options);

  
  });
//carousel
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var options = {
      fullWidth: true,
      indicators:true
  
  };
  var instances = M.Carousel.init(elems, options);
});

//collapsible
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var options = {};
  var instances = M.Collapsible.init(elems, options);
});


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });



