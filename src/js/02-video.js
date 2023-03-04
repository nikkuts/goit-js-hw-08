   
    import throttle from 'lodash.throttle';
    import Player from '@vimeo/player';

    const STORAGE_KEY = "videoplayer-current-time";
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
        localStorage.setItem(STORAGE_KEY, seconds);
        console.log(localStorage);
    };
    
    player.on('timeupdate', throttle(onPlay, 1000));

    function refreshPage() {
        let currentTime = localStorage.getItem(STORAGE_KEY);

        if (currentTime) {
            player.setCurrentTime(currentTime);
            localStorage.removeItem(STORAGE_KEY);
        }
    };

    