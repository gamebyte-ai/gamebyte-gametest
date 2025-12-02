// Game data - manually configured based on available game folders
const games = [
  {
    id: 'isportfoy',
    title: 'IS PORTFOY Runner',
    description: 'An exciting endless runner game. Dodge obstacles and collect coins in this fast-paced adventure!',
    icon: '🏃',
    tags: ['Runner', 'Arcade', 'Mobile'],
    color: '#6366F1'
  },
  {
    id: 'tetris',
    title: 'TETRIS',
    description: 'The classic block-stacking puzzle game. Arrange falling blocks to clear lines and score points!',
    icon: '🧱',
    tags: ['Puzzle', 'Classic', 'Mobile'],
    color: '#8B5CF6'
  }
];

// Create game card HTML
function createGameCard(game) {
  return `
    <a href="/${game.id}/" class="game-card">
      <div class="game-thumbnail" style="--card-color: ${game.color}">
        <div class="game-icon">${game.icon}</div>
      </div>
      <div class="game-card-content">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-description">${game.description}</p>
        <div class="game-tags">
          ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="play-indicator">
          <span>Play Now</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  `;
}

// Render games grid
function renderGames() {
  const gamesGrid = document.getElementById('gamesGrid');

  if (!gamesGrid) return;

  if (games.length === 0) {
    gamesGrid.innerHTML = `
      <div class="no-games">
        <div class="no-games-icon">🎮</div>
        <p>No games available yet. Check back soon!</p>
      </div>
    `;
    return;
  }

  gamesGrid.innerHTML = games.map(createGameCard).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', renderGames);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add subtle parallax effect to hero visual
window.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.floating-card');
  const x = (e.clientX - window.innerWidth / 2) / 50;
  const y = (e.clientY - window.innerHeight / 2) / 50;

  cards.forEach((card, index) => {
    const factor = (index + 1) * 0.5;
    card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});
