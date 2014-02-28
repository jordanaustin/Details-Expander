(function() {
  "use strict"
    window.addEventListener('load', function() {
      if(document.documentElement.classList.contains('no-details')) {
        var details = document.querySelectorAll('details');

        [].forEach.call(details, function(detail) {
          detail.addEventListener('click', function(e) {
            if(e.currentTarget.hasAttribute('open')) {
              e.currentTarget.removeAttribute('open');
            }
            else {
              e.currentTarget.setAttribute('open','open');
            }
          },true);
        });
      }
  });
}());
