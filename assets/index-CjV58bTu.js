document.addEventListener('DOMContentLoaded', () => {
  const marketRail = document.querySelector('.market-rail');
  const mobileTrigger = document.querySelector('.mobile-trigger');
  const closeMobile = document.querySelector('.close-mobile');
  let overlay = document.querySelector('.mobile-nav-overlay');

  if (!overlay) {
    overlay = document.createElement('button');
    overlay.type = 'button';
    overlay.className = 'mobile-nav-overlay';
    overlay.setAttribute('aria-label', 'Close markets menu');
    document.body.appendChild(overlay);
  }

  const setMarketRailOpen = (open) => {
    if (!marketRail) return;
    marketRail.classList.toggle('open', open);
    overlay.classList.toggle('visible', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (mobileTrigger && marketRail) {
    mobileTrigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = marketRail.classList.contains('open');
      setMarketRailOpen(!isOpen);
    });
  }

  if (closeMobile && marketRail) {
    closeMobile.addEventListener('click', () => setMarketRailOpen(false));
  }

  overlay.addEventListener('click', () => setMarketRailOpen(false));

  document.addEventListener('click', (event) => {
    if (!marketRail || !marketRail.classList.contains('open')) return;
    const target = event.target;
    const clickedInsideRail = marketRail.contains(target);
    const clickedTrigger = mobileTrigger && mobileTrigger.contains(target);
    if (!clickedInsideRail && !clickedTrigger) {
      setMarketRailOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && marketRail && marketRail.classList.contains('open')) {
      setMarketRailOpen(false);
    }
  });

  document.querySelectorAll('.market-tabs button').forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.querySelectorAll('button').forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  document.querySelectorAll('.contract-grid button').forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  document.querySelectorAll('.quick-stakes button').forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
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

  const connection = document.querySelector('.connection');
  if (connection) {
    connection.classList.add('offline');
    connection.innerHTML = '<i></i> OFFLINE';
  }

  const statusLine = document.querySelector('.status-line');
  if (statusLine) {
    const label = statusLine.querySelector('span');
    if (label) {
      label.textContent = 'Market feed ready';
    }
  }
});
