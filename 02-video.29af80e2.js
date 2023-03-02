!function(){var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("timeupdate",(function(e){e.duration,e.percent,e.seconds}))}();
//# sourceMappingURL=02-video.29af80e2.js.map
