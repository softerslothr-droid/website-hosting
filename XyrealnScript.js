// Copy IP to clipboard
document.getElementById('copy-ip').addEventListener('click', () => {
  const ip = document.querySelector('.ip').textContent.replace('IP: ', '');
  navigator.clipboard.writeText(ip).then(() => {
    alert(`Server IP copied: ${ip}`);
  });
});

// Copy email to clipboard
document.getElementById('copy-email').addEventListener('click', () => {
  const email = 'xyrealnhelp@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert(`Email copied: ${email}`);
  });
});


// Example: Fetch Minecraft server status (replace with your server info)
async function getServerStatus() {
  const statusElement = document.getElementById('server-status');

  try {
    // This uses the mcsrvstat API (you can replace with your own)
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
