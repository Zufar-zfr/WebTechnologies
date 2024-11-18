// Проверяем, есть ли сохраненная тема
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.remove('dark-theme');
}

// Функция для переключения темы
document.getElementById('changeColorButton').addEventListener('click', function() {
  // Переключаем класс на body
  document.body.classList.toggle('dark-theme');

  // Сохраняем текущую тему в localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


// аремя
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('currentDateTime').textContent = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);

// форма подписки
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('popupEmail').value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        document.getElementById('subscribeModal').modal('hide');
    } else {
        alert('Please enter a valid email address.');
    }
});

// форма контактов
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
    
    // Валидация email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Валидация пароля
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Валидация подтверждения пароля
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }

    if (valid) {
        alert('Form submitted successfully!');
        // код для отправки данных на сервер
    }
});

// Функция для валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}





function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Replace these with your actual credentials
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "index.html"; // Redirect to index.html
    } else {
        errorMsg.style.display = "block"; // Show error message
    }
}


// Первоначальное обновление даты и времени при загрузке
updateDateTime();
