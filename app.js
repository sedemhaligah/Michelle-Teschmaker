const pic = document.querySelector('img')
let isZoomed =false;

pic.addEventListener("touchstart", function(){
    if(isZoomed) {
        pic.classList.add("zoomed");
        isZoomed = true;
    }
});

pic.addEventListener("touchend", function(e){
    if(!pic.contains(e.target)) {
        pic.classList.remove("zoomed");
        isZoomed = false;
    }
})