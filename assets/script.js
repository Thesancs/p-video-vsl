async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header', './components/header.html');

  const mainEl = document.getElementById('main');
  const videoRes = await fetch('./components/video.html');
  mainEl.innerHTML = await videoRes.text();
  const playerScript = document.createElement('script');
  playerScript.src =
    'https://scripts.converteai.net/c9da0398-934e-4680-99b9-d4888d7094af/players/6842141d891666ff59083fee/player.js';
  playerScript.async = true;
  document.head.appendChild(playerScript);

  const ctaRes = await fetch('./components/cta.html');
  mainEl.insertAdjacentHTML('beforeend', await ctaRes.text());

  await loadComponent('footer', './components/footer.html');

  setTimeout(() => {
    document.getElementById('cta-button').classList.remove('hidden');
  }, 90000);
});
