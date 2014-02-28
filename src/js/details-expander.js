(function() {
  "use strict"
    window.addEventListener('load', function() {
      if(document.documentElement.classList.contains('no-details')) {
        var details = document.querySelectorAll('details > summary');

        [].forEach.call(details, function(detail) {
          detail.addEventListener('click', function(e) {
            if(e.target.parentNode.hasAttribute('open')) {
              e.target.parentNode.removeAttribute('open');
            }
            else {
              e.target.parentNode.setAttribute('open','open');
            }
          },true);
        });
      }
  });
}());