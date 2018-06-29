var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    playerVars: 
          {
            listType:'playlist',
            list: 'PL1T2anvedVfKx0NOXL-NVlW3e6YqdOTbO'
          }
    });
}


