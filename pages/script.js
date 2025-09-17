const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

p2.addEventListener('click', function () {
  window.location.href = 'p2/index.html'
})

p1.addEventListener('click', function () {
    window.location.href = 'p1/index.html';
});
document.getElementById('copy-email').addEventListener('click', () => {
  const email = 'xyrealnhelp@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert(`Email copied: ${email}`);
  });
});