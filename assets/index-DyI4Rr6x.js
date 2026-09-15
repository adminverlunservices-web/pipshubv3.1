document.addEventListener('DOMContentLoaded', () => {
  const marketRail = document.querySelector('.market-rail');
  const mobileTrigger = document.querySelector('.mobile-trigger');
  const closeMobile = document.querySelector('.close-mobile');

  if (mobileTrigger && marketRail) {
    mobileTrigger.addEventListener('click', () => marketRail.classList.add('open'));
  }

  if (closeMobile && marketRail) {
    closeMobile.addEventListener('click', () => marketRail.classList.remove('open'));
  }

  document.querySelectorAll('.market-tabs button, .contract-grid button, .quick-stakes button').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.parentElement;
      group.querySelectorAll('button').forEach((btn) => btn.classList.remove('selected', 'active'));
      button.classList.add(button.classList.contains('market-tabs') ? 'selected' : 'active');
    });
  });

  document.querySelectorAll('.symbol').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.symbol').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const searchInput = document.querySelector('.search input');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const term = event.target.value.trim().toLowerCase();
      document.querySelectorAll('.symbol').forEach((symbol) => {
        const text = symbol.textContent.toLowerCase();
        symbol.style.display = text.includes(term) ? 'flex' : 'none';
      });
    });
  }
});
