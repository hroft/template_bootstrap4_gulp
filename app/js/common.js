jQuery(document).ready(function() {
    $("#tabs").on("click", ".col", function() {
        $("#tabs .col").removeClass("act"); //удаляем класс во всех вкладках
        $(this).addClass("act"); //добавляем класс текущей (нажатой)
    });

    // $("#tabs .col.tacit").addClass("act");
    setTimeout(function() {
        $('#tabs .col.tacit').trigger('click');
    }, 100);

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: false, ///
        startPosition: 'URLHash',
        nav: false,
        dots: false
    });
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        // console.log(event.item.index);
        if (event.item.index === 0) {
            // console.log('skk');
            $("#tabs .col").removeClass("act");
            $("#tabs .col.tacit").addClass("act");
        };
        if (event.item.index === 1) {
            //	console.log('tn1');
            $("#tabs .col").removeClass("act");
            $("#tabs .col.tn1").addClass("act");
        };
        if (event.item.index === 2) {
            //	console.log('fn1');
            $("#tabs .col").removeClass("act");
            $("#tabs .col.fn1").addClass("act");
        };
        if (event.item.index === 3) {
            //	console.log('grinas');
            $("#tabs .col").removeClass("act");
            $("#tabs .col.grinas").addClass("act");
        };
        if (event.item.index === 4) {
            //	console.log('dvaoma');
            $("#tabs .col").removeClass("act");
            $("#tabs .col.dvaoma").addClass("act");
        };
        if (event.item.index === 5) {
            //	console.log('realmart');
            $("#tabs .col").removeClass("act");
            $("#tabs .col.realmart").addClass("act");
        };
    })
});
$(function() {

    // Custom JS

});