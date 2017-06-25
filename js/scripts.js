$( document ).ready(function() {
  // var scene = document.getElementById('scene');
  // var parallax = new Parallax(scene);

  var controller = new ScrollMagic.Controller();
  var cena = new ScrollMagic.Scene({
    triggerElement: "#logo-cacife",
    duration: "60%"
  })
  .setClassToggle("#logo-cacife", "aparece")
  .addIndicators()
  .addTo(controller);






  // var exibe = "$('#logo-cacife').removeClass( 'fadeIn' ).addClass( 'fadeOut' )";
  // setTimeout(exibe, 6000);
  // var exibe2 = "$('#logo-starfish').removeClass( 'esconde' ).addClass( 'fadeIn' )";
  // setTimeout(exibe2, 9000);
  //exibeMenu();
});

// function exibeMenu() {
//   var exibe = "$('#menu').removeClass( 'esconde' ).addClass( 'animated fadeIn' )";
//   setTimeout(exibe, 6000);
//
// }
