function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Main clock
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Reflection clock
  document.getElementById('hours-reflection').textContent = hours;
  document.getElementById('minutes-reflection').textContent = minutes;
  document.getElementById('seconds-reflection').textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock();




