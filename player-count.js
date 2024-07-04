function updatePlayerCount() {
  fetch('https://api.mcsrvstat.us/2/bloxblast.net')
      .then(response => response.json())
      .then(data => {
          const playerCount = data.players.online;
          document.getElementById('player-count').textContent = `Players Online: ${playerCount}`;
      })
      .catch(error => {
          console.error('Error fetching player count:', error);
          document.getElementById('player-count').textContent = 'Unable to fetch player count';
      });
}

updatePlayerCount();
setInterval(updatePlayerCount, 60000); // Update every minute