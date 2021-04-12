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
                document.getElementById("img").src = pictures[i];
                }
                function loadnextimage() 
                {
                setInterval(Nextimage, 2500);
                }