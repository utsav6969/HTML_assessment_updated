    function swap1and2()
            {
                var image1,image2;
                image1=document.getElementById('image1').src;
                image2=document.getElementById('image2').src;
                document.getElementById('image2').src=image1;
                document.getElementById('image1').src=image2;
             }
    function swapImage2and3and1and4()
            {
                 var image1,image2,image3,image4;
                 image1=document.getElementById('image1').src;
                 image4=document.getElementById('image4').src;
                 image2=document.getElementById('image2').src;
                 image3=document.getElementById('image3').src;
                 document.getElementById('image4').src=image1;
                 document.getElementById('image1').src=image4;
                 document.getElementById('image2').src=image3;
                 document.getElementById('image3').src=image2;
             }
