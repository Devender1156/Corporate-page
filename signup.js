// Signup validation + simple password strength indicator
(function(){
  const form = document.getElementById('signupForm');
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('signupEmail');
  const passwordInput = document.getElementById('signupPassword');
  const confirmInput = document.getElementById('confirmPassword');
  const strengthEl = document.getElementById('passwordStrength');

  function clearErrors(){
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('signupSuccess').textContent = '';
  }

  function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function computePasswordScore(pw){
    let score = 0;
    if(pw.length >= 8) score++;
    if(/[A-Z]/.test(pw)) score++;
    if(/[a-z]/.test(pw)) score++;
    if(/[0-9]/.test(pw)) score++;
    if(/[^A-Za-z0-9]/.test(pw)) score++;
    return score; // 0..5
  }

  function strengthText(score){
    if(score <= 2) return 'Weak';
    if(score === 3 || score === 4) return 'Medium';
    return 'Strong';
  }

  passwordInput.addEventListener('input', function(){
    const val = passwordInput.value;
    const score = computePasswordScore(val);
    strengthEl.textContent = 'Password strength: ' + (val ? strengthText(score) : '—');
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    let hasError = false;

    if(name === ''){
      document.getElementById('nameError').textContent = 'Full name is required.';
      hasError = true;
    }

    if(email === ''){
      document.getElementById('emailError').textContent = 'Email is required.';
      hasError = true;
    } else if(!isValidEmail(email)){
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      hasError = true;
    }

    if(password.length < 8){
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
      hasError = true;
    }

    if(password !== confirm){
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      hasError = true;
    }

    if(hasError) return;

    // Demo: in real use, send data to backend. For now show success message:
    document.getElementById('signupSuccess').textContent = 'Account created (demo). You would now call your server API.';
    form.reset();
    strengthEl.textContent = 'Password strength: —';
  });
})();
