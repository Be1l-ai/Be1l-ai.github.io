function sanitizeInput(str) {
  return str.replace(/[^\w\s!@#\$%\^\&*\)\(+=._-]/g, '').trim();
}

function checkPassword() {
  const input = document.getElementById("site-password").value;
  const sanitized = sanitizeInput(input);
  const error = document.getElementById("login-error");

  if (sanitized === PASSWORD_CONFIG.correctPassword) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("site-content").style.display = "block";
  } else {
    error.textContent = "Incorrect password. Please try again.";
  }
}

