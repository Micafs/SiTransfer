/*---------- Package Gallery ----------*/

var productTabs = document.querySelector('.packages .package-btns');

productTabs.addEventListener('click', function(e){

    if(e.target.classList.contains('package-btn') && !e.target.classList.contains('active')){
        
        var target = e.target.getAttribute('data-target');
        productTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        var productSection = document.querySelector('.packages');
        productSection.querySelector('.package-gallery.active').classList.remove('active');
        productSection.querySelector(target).classList.add('active');

    }
})