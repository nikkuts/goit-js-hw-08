   
        import throttle from 'lodash.throttle';
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

    function onPlay ({
        duration,
        percent,
        seconds
    }) {
        localStorage.setItem("videoplayer-current-time", seconds);
        console.log(localStorage);
    };
    
    player.on('timeupdate', throttle(onPlay, 1000));

    function refreshPage() {
        let currentTime = localStorage.getItem("videoplayer-current-time");

        if (currentTime) {
            player.setCurrentTime(currentTime);
            localStorage.removeItem("videoplayer-current-time");
        }
    };

    