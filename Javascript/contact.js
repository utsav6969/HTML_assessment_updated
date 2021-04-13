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
    $('#submit').click(function() {
        var name = $('#fname').val();
        var email = $('#email').val();
        var comment = $('#comment').val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var namereg = /^[a-zA-Z ]{2,30}$/;

        if(name == '' || name == null || email == '' || email == null || comment == '' || comment == null){
            alert("All Fields are mandatory");
            return false;
        }
        else if(!name.match(namereg)){
            alert("Enter a valid name");
            
        }
        else if(!email.match(emailReg)) {
            alert("Enter a valid Email Address")

        }
    })
    })
