(function () {
  var search = document.getElementById('search');
  var buttons = [].slice.call(document.querySelectorAll('[data-tag]'));
  var cards = [].slice.call(document.querySelectorAll('.post-card'));
  var empty = document.getElementById('empty');
  var activeTag = '';

  function apply() {
    var q = (search.value || '').trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split('|');
      var text = (card.getAttribute('data-search') || '').toLowerCase();
      var ok = (!activeTag || tags.indexOf(activeTag) > -1) && (!q || text.indexOf(q) > -1);
      card.classList.toggle('hidden', !ok);
      if (ok) shown++;
    });
    empty.classList.toggle('hidden', shown > 0);
  }

  search.addEventListener('input', apply);
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeTag = btn.getAttribute('data-tag');
      buttons.forEach(function (b) { b.classList.toggle('primary', b === btn); });
      apply();
    });
  });
})();
