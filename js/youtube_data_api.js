let videoID;
$(document).ready(function(){
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
            part: "contentDetails",
            id: "UCuZV0jMqLoyLgwDqoot12RA",
            key: "AIzaSyDySDprdbpOevDDU4TLYVqaB42JFzMtQtI"
        },function(data) {
            $.each(data.items, function(i, item) {
                console.log(item);
                pid = item.contentDetails.relatedPlaylists.uploads;
                getVids(pid);
            })
        }

    );
    function getVids(pid) {
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems",
            {
                part: "snippet",
                maxResults: 10,
                playlistId: "UUuZV0jMqLoyLgwDqoot12RA",
                key: "AIzaSyDySDprdbpOevDDU4TLYVqaB42JFzMtQtI"
            }, function(data) {
                var output;
                i = 0;
                vidItem = data.items[i];
                vidTitle = vidItem.snippet.title; 
                vidId = vidItem.snippet.resourceId.videoId;
                if (vidTitle.includes("LIYAN")) {
                    function  onYouTubeIframeAPIReady(vidId);                        
                } else {
                    i++;
                }
            }

        )
    }
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady(vidId) {
    player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: vidId
    });
}

