document.addEventListener('DOMContentLoaded', function () {


    // OPEN AND CLOSE SITE NAV  MENU
    const mysitenav = document.querySelector('.site-nav');
    const mymenubutton = document.querySelector('.menu-button');

    mymenubutton.onclick = function () {
        if (mysitenav.getAttribute('data-navstate') === ('closed')){
            mysitenav.setAttribute('data-navstate','open')
        } else {
            mysitenav.setAttribute('data-navstate','closed') 

        };
     
    };

    // REVEAL ON SCROLL JS
    // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
    // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER 
    const myobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
        });
    });
    
    
    document.querySelectorAll('.scroll-triggered').forEach((el) => {
        myobserver.observe(el);
    }); 


});