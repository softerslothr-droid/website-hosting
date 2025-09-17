document.getElementById('copy-email').addEventListener('click', () => {
  const email = 'xyrealnhelp@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert(`Email copied: ${email}`);
  });
});