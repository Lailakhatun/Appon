$(function(){
    // mix it up
    var containerEl = document.querySelector('.imgare-row');

        var mixer = mixitup(containerEl);


        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 2000,
        });
});
