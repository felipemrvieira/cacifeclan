$( document ).ready(function() {

  var controller = new ScrollMagic.Controller();


  var scene = new ScrollMagic.Scene({
    triggerElement: "#logo-cacife",
    duration: 400,
    triggerHook: 0.2
  })
	.setPin("#logo-cacife")
	// .addIndicators({name: "Pin Logo Cacife"})
	.addTo(controller);


  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#logo-cacife",
    triggerHook: 0.5
  })
	// .addIndicators({name: "Mostra Logo Cacife"})
  .setVelocity("#logo-cacife", {opacity: 1}, {duration: 600})
	.addTo(controller);


  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#logo-medellin",
    duration: 400,
    triggerHook: 0.2
  })
	.setPin("#logo-medellin")
	// .addIndicators({name: "Pin Logo medellin"})
	.addTo(controller);


  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#felp22",
    triggerHook: 0.2
  })
	.setPin("#felp22")
	.addIndicators({name: "Pin felp22"})
	.addTo(controller);


});
