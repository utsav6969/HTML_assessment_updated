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

function validate() {
    var name = document.contactform.Name.value;
    var email = document.contactform.Email.value;
    var comment = document.contactform.comment.value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var namereg = /^[a-zA-Z ]{2,30}$/;

    if (name==null || name.trim().length == 0 || 
        email==null || email.trim().length == 0 ||
        comment==null || comment.trim().length == 0){  
        alert("All Fields are mandatory");  
        return false;
    }
    else if(!name.match(namereg)){
        alert("Enter a valid name");
        return false;
    }
    else if(!email.match(emailReg)) {
        alert("Enter a valid Email Address");
        return false;
    }
    } 