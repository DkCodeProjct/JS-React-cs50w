/* make img id, adjust as you wish height and width */


// js function for make one img responsive
function ResponsiveImg() {
    var img = document.getElementById('img');

    if (window.innerWidth >= 992) { // 992 could be the big screen 
        img.style.width = "600px";
        img.style.height = "300px";

    } else { // change size in smaller scren
        img.style.width = "100%";
    }
}

// js function for make multiple img responsive

ResponsiveImg();
    window.addEventListener('resize', ResponsiveImg);
        function ResponsiveImg() {
            var images = document.querySelectorAll('.image-wrapper img');

            if (window.innerHeight < 768) {

                images.forEach(function(img) {
                    img.style.height = "250px";
                    img.style.width = "250px";
                }); 
            } else {
                images.forEach(function(img) {
                    img.style.height = "200px";
                    img.style.height = "200px";
                })
            }
        }

        window.onload = ResponsiveImg;
        window.onresize = ResponsiveImg;
