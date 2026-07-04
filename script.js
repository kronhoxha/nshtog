function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a:not(.nav-order-btn)').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const map = { home: 0, menu: 1, location: 2 };
  const links = document.querySelectorAll('.nav-links a:not(.nav-order-btn)');
  if (links[map[id]]) links[map[id]].classList.add('active');
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const nl = document.getElementById('nav-links');
  nl.classList.remove('open');
}

    function showMenuTab(tab, btn) {
      document.querySelectorAll('.menu-page-section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.menu-page-tab').forEach(b => b.classList.remove('active'));
      document.getElementById('tab-' + tab + '-page').classList.add('active');
      btn.classList.add('active');
    }

    function switchPreviewTab(id, btn) {
      document.querySelectorAll('.menu-grid').forEach(g => g.classList.remove('active'));
      document.querySelectorAll('.menu-cat-btn').forEach(b => b.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      btn.classList.add('active');
    }

    function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('open');
    }