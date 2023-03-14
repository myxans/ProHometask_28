(function() {
    const input = document.querySelector('input');
    const box = document.querySelector('div');


    input.addEventListener('click', function () {
        box.classList.add('active')
    });

  document.addEventListener('mouseup', function(evt) {
    if (input !== document.activeElement && box !== evt.target) {
        box.classList.remove('active')
      };
  })
})();