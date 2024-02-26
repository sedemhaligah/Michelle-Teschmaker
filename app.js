const pic = document.querySelector('img');
pic.addEventListener("touchstart", function(){
    if(isZoomed) {
        pic.classList.add("zoomed");
        isZoomed = true;
    }
});

document.addEventListener("touchend", function(e){
    if(!pic.contains(e.target)) {
        pic.classList.remove("zoomed");
        isZoomed = false;
    }
})
