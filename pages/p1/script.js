document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copy-ip');
  
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      const ipElement = document.querySelector('.ip');
      
      if (ipElement) {
        const ip = ipElement.textContent.replace('IP: ', '');
        
        navigator.clipboard.writeText(ip)
          .then(() => {
            alert(`Server IP copied: ${ip}`);
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Could not copy IP. Your browser may require a secure (HTTPS) connection to use this feature.');
          });
      } else {
        alert('Error: Could not find the IP address element.');
      }
    });
  } else {
    console.error('Error: Could not find the copy button with ID "copy-ip".');
  }
});
document.getElementById('copy-email').addEventListener('click', () => {
  const email = 'xyrealnhelp@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert(`Email copied: ${email}`);
  });
});