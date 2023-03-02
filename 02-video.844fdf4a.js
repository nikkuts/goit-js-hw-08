const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("timeupdate",(function({duration:e,percent:o,seconds:n}){}));
//# sourceMappingURL=02-video.844fdf4a.js.map
