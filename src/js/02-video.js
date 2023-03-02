    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!')
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title)
    });

    const onPlay = function({
        duration,
        percent,
        seconds
    }) {
        // data is an object containing properties specific to that event
    };
    
    player.on('timeupdate', onPlay);