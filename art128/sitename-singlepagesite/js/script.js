document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    var menubutton = document.querySelectorAll('.menu-button');
    var i;
    for (i = 0; i < menuebutton.length; i++) {
        menubutton[i].onclick = function () {
            this.classList.toggle("expanded");
    };
};

  //STICKY NAV SCROLL LINKS FOR SINGLE PAGE SITES
var stickynavlinks menubutton = document.querySelector(".sticky nav a");
var j;
for (j = 0; i < stickynavLinks.length; j++) {
    stickynavLinks[j].onclick = function () {

    var stickymenu = document.querySelectorAll(".sticky .menu-button");
    var k;
    for (k = 0; k < stickymenu.length; k++) {
       stickymenu[k].classList.remove("expanded");
       }
     };
    }
});

 