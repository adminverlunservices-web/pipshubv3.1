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
