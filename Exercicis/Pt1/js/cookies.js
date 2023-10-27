function refreshWindow() {
    const date = new Date();
    var data = date.toLocaleDateString()+" "+date.toLocaleTimeString();
    
    
    document.cookie = "ultimaVisita=" + encodeURIComponent( data ) + ";max-age=3600; path=/";
    
}


window.addEventListener("load", refreshWindow);