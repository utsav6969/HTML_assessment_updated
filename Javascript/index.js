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

// Change Image One in every 5 seconds
             var pictures = [], i = -1;
             pictures[0] = "./images/slide1.png";
             pictures[1] = "./images/slide2.png";
             pictures[2] = "./images/slide3.png";
             pictures[3] = "./images/slide4.png";
             pictures[4] = "./images/slide5.png";
         
         
         function Nextimage() 
             {
             if(i == pictures.length - 1) {
               i = 0;
             }
             else{
               i = i+1;
             }
             document.getElementById("image1").src = pictures[i];
             }
             function loadnextimage() 
             {
             setInterval(Nextimage, 5000);
             }
