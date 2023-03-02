   
        import Player from '@vimeo/player';
       const iframe = document.querySelector('iframe');
       const player = new Player(iframe);
   
       player.on('play', function() {
           console.log('played the video!');
       });
   
       player.getVideoTitle().then(function(title) {
           console.log('title:', title);
       });
  
       
       refreshPage();

    const onPlay = function({
        duration,
        percent,
        seconds
    }) {
        localStorage.setItem("videoplayer-current-time", seconds);
        console.log(localStorage);
    };
    
    player.on('timeupdate', onPlay);

    const refreshPage = function() {
        let currentTime = localStorage.getItem("videoplayer-current-time");

        if (currentTime) {
            player.setCurrentTime(currentTime);
            localStorage.removeItem("videoplayer-current-time");
        }
    };

   