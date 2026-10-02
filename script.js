'use strict';
const views = [...document.querySelectorAll('[data-view]')];
let currentView = 'home';
const titles = { home: 'Yuan Tian | Computational Geophysics', research: 'Research | Yuan Tian', cv: 'CV & Background | Yuan Tian', publications: 'Publications | Yuan Tian' };
function showRoute(initial = false) {
  const id = location.hash.slice(1) || 'home';
  const target = document.getElementById(id);
  const owner = target && target.closest('[data-view]');
  const nextView = owner ? owner.dataset.view : (id === 'contact' || id === 'main' ? currentView : 'home');
  views.forEach(view => { view.hidden = view.dataset.view !== nextView; });
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === nextView) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = titles[nextView];
  currentView = nextView;
  if (!initial) {
    if (target && owner && target !== owner) target.scrollIntoView({ block: 'start' });
    else if (id === 'contact' || id === 'main') target?.scrollIntoView({ block: 'start' });
    else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const heading = document.querySelector(`[data-view="${nextView}"] h1, [data-view="${nextView}"] .page-title`);
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    }
  } else if (target && owner && target !== owner) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
}
window.addEventListener('hashchange', () => showRoute());
showRoute(true);
const dialog = document.querySelector('#figure-dialog');
const figureImage = dialog.querySelector('img');
const figureCaption = dialog.querySelector('p');
document.querySelectorAll('[data-figure]').forEach(button => {
  button.addEventListener('click', () => {
    figureImage.src = button.dataset.figure;
    figureImage.alt = button.querySelector('img').alt;
    figureCaption.textContent = button.dataset.caption;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', async () => {
    const citation = button.parentElement.querySelector('p').textContent;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(citation);
      button.textContent = 'Copied';
      document.querySelector('#copy-status').textContent = 'Citation copied to clipboard.';
      window.setTimeout(() => { button.textContent = 'Copy citation'; }, 2500);
    } catch (_) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(button.parentElement.querySelector('p'));
      selection.removeAllRanges(); selection.addRange(range);
      button.textContent = 'Citation selected';
      document.querySelector('#copy-status').textContent = 'Citation selected. Use your device’s copy command.';
      window.setTimeout(() => { button.textContent = 'Copy citation'; }, 3500);
    }
  });
});
