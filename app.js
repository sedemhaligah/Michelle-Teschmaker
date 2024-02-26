const pic = document.querySelector('img');
const picConatainer = document.querySelector('.picContainer');
let isZoomed =false;

picContainer.addEventListener("touchstart", function(){
    if(isZoomed) {
        pic.classList.add("zoomed");
        isZoomed = true;
    }
});

picContainer.addEventListener("touchend", function(e){
    if(!pic.contains(e.target)) {
        pic.classList.remove("zoomed");
        isZoomed = false;
    }
})
