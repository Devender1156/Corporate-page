// Simple client-side validation for login form
(function(){
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');

  function clearErrors(){
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
    document.getElementById('loginError').textContent = '';
  }

  function isValidEmail(email){
    // simple email regex for basic validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    clearErrors();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let hasError = false;

    if(email === ''){
      document.getElementById('loginEmailError').textContent = 'Email is required.';
      hasError = true;
    } else if(!isValidEmail(email)){
      document.getElementById('loginEmailError').textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    if(password === ''){
      document.getElementById('loginPasswordError').textContent = 'Password is required.';
      hasError = true;
    }

    if(hasError){
      return;
    }

    // Demo success: in real app you'd send this to the server via fetch/AJAX
    document.getElementById('loginError').textContent = '';
    alert('Login validation passed (demo). Replace alert with real authentication flow.');
    form.reset();
  });
})();
