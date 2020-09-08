$(document).ready(() => {
    let url = location.href.replace(/\/$/, "");
 
    if (location.hash) {
        const hash = url.split("#");
        url = location.href.replace(/\/#/, "#");
        history.replaceState(null, null, url);
        // $('#myTab a[href="#'+hash[1]+'"]').tab("show");
        setTimeout(() => {
            $('#myTab a[href="#'+hash[1]+'"]').tab("show");        
        }, 200);
        
    } 

    $('a[data-toggle="tab"]').on("click", function() {
        let newUrl;
        const hash = $(this).attr("href");
        if(hash == "#home") {
            newUrl = url.split("#")[0];
        } else {
            newUrl = url.split("#")[0] + hash;
        }
        newUrl += "/";
        history.replaceState(null, null, newUrl);
    });
    
    $('#about-contact-link').on('click', function () {
        location.reload(true);
        setTimeout( () => {location.reload(true)}, 10 ); 
    });
    
});