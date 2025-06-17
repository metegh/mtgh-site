// Добавляем в конец файла

// Проверка авторизации при загрузке
if (localStorage.getItem('mtghLoggedIn') === 'true') {
  document.getElementById('login').style.display = 'none';
  document.getElementById('siteContent').classList.remove('hidden');
}

// Обновляем функцию checkCode()
function checkCode() {
  const input = document.getElementById('codeInput').value;
  if (input === 'MTGHVersionOf1Star') {
    localStorage.setItem('mtghLoggedIn', 'true');
    document.getElementById('login').style.display = 'none';
    document.getElementById('siteContent').classList.remove('hidden');
  } else {
    alert('Incorrect code');
  }
}

function logout() {
  localStorage.removeItem('mtghLoggedIn');
  location.reload();
}

function showSettings() {
  alert('Settings will be available in next update!');
}
