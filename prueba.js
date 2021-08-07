//contacto
var owl = $( '.owl-carousel' );
owl.owlCarousel( {
    items: 3,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
} );
$( '.play' ).on( 'click', function() {
    owl.trigger( 'play.owl.autoplay', [ 1000 ] );
} );
$( '.stop' ).on( 'click', function() {
    owl.trigger( 'stop.owl.autoplay' );
} );