function showOverlay(src){
    event.preventDefault();
        document.getElementById("overlayVid").src = src;
    document.getElementById("overlay").style.display = "flex";
    
}

function hideOverlay(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlayVid").src = "";
}