//pages button
document.getElementById('other-pages').addEventListener('click', function () {
  window.location.href = 'pages/index.html'
});
//server status
async function getServerStatus() {
  const statusElement = document.getElementById('server-status');

  try {
    const response = await fetch('https://api.mcsrvstat.us/2/play.xyrealn.com');
    const data = await response.json();

    if (data.online) {
      statusElement.textContent = `Online with ${data.players.online}/${data.players.max} players!`;
    } else {
      statusElement.textContent = 'Server is offline.';
    }
  } catch (error) {
    statusElement.textContent = 'Unable to check status.';
  }
}

getServerStatus();

