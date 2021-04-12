$(document).ready(function() {
    var images = $('.pictures')
    currentimageindex = 0;
    images.hide();
    Nextimage();
    function Nextimage() {
        $(images[currentimageindex]).fadeIn('fast').delay(2500).fadeOut('fast');
        $(images[currentimageindex]).queue(function() {
            if (currentimageindex < images.length - 1) {
                currentimageindex = currentimageindex + 1;
            }
            else {
                currentimageindex = 0;
            }
            Nextimage();
            $(this).dequeue();
        });
    }
});