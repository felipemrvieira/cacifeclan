$( document ).ready(function() {
    scaleVideoContainer();

    var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.main').css('height',unitHeight);

}
