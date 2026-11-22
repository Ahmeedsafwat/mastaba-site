// The chart pages' share button (site.share_button). Our own script: no third party.
document.querySelectorAll('.share-btn').forEach(function (b) {
  b.addEventListener('click', async function () {
    var c = document.querySelector('link[rel=canonical]');
    var u = c ? c.href : location.href.split('#')[0], t = document.title;
    if (navigator.share) { try { await navigator.share({title: t, url: u}); } catch (e) {} return; }
    try { await navigator.clipboard.writeText(u); }
    catch (e) { var a = document.createElement('textarea'); a.value = u; document.body.appendChild(a);
                a.select(); document.execCommand('copy'); a.remove(); }
    var s = b.nextElementSibling; s.textContent = b.dataset.done;
    clearTimeout(b._t); b._t = setTimeout(function () { s.textContent = ''; }, 2000);
  });
});
