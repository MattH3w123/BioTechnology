window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 760) {
      header.style.backgroundColor = '#181818';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, .4)';
    }
  });

  var elements = document.querySelectorAll('poczotek');

elements.forEach(function(element) {
    element.id = 'biotech-trad';
});

var music = document.getElementById("mussic");
var btn = document.getElementById("btn");

btn.onclick = function(){
    if(music.paused){
        music.play();
        btn.style = "opacity: 1";
        showply = setInterval(puls, 450);
    }else{
        music.pause();
        btn.style = "opacity: .7";
        clearInterval(showply);
    }
};

function puls() {
  var cel = parseFloat(btn.style.opacity);
  var aktualny = cel === 0.7 ? 1 : 0.7;
  btn.style.opacity = aktualny;
};

var audio = document.getElementById("mussic");
audio.volume = 0.5;