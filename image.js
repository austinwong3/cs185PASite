function showOverlay(src){
    document.getElementById("overlayImg").src = src;
    document.getElementById("overlay").style.display = "flex";
}

function hideOverlay(){
    document.getElementById("overlay").style.display = "none";
}

function scrollToTop()
{
    window.scroll({
        top: 0, 
        behavior: 'smooth'
      });

}

mybutton = document.getElementById("scrollTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight/4 || document.documentElement.scrollTop > window.innerHeight/4) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }