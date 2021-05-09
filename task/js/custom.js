jQuery(".banner-slider").owlCarousel({  
  lazyLoad: true,
  loop: true,
  margin: 20,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
}); 


/*slider*/
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
  margin: 10,
  loop:true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplay:true,
  autoplayTimeout: 1000,
    nav : true,
    responsive:{
      0: {
        items:1
      },
      600: {
        items:2
      },
      1024: {
        items:4
      },
      1366:{
        items:4
      }
    }
  });

});