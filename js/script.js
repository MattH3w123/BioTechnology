window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 760) {
      header.style.backgroundColor = '#181818';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, .4)';
    }
  });

  var elements = document.querySelectorAll('poczotek');

// Iteruj przez wszystkie znalezione elementy
elements.forEach(function(element) {
    // Zmiana identyfikatora na nowy
    element.id = 'biotech-trad';
});