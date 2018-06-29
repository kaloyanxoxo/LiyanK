(function () {
    var preload = document.getElementById("preloader");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame (){
        if (loading == 100){
            clearInterval(id);
            window.open("main_page.html", "_self");
        } else {
            loading++;
            if(loading == 90){
                preloader.style.animation = "fadeout 3.5s ease";
            }
        }
    }

})();