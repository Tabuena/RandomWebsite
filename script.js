document.querySelector('.cta-btn').addEventListener('click', () => {
    window.location.href = "welcome.html";  // Redirect to welcome page after successful login

  });
  
  document.querySelector('.contact-btn').addEventListener('click', () => {
    alert('Contact form coming soon!');
  });
  
  const loginForm = document.getElementById('loginForm');
  const statusMessage = document.getElementById('statusMessage');
  
  // Handle form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Mock login success
    statusMessage.textContent = `Welcome, ${username}! You are now logged in.`;
    statusMessage.style.color = 'green';
  
    // Save login state (optional)
    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', true);
  
    // Simulate navigation to a dashboard or other page
    setTimeout(() => {
      alert('Redirecting to the dashboard...');
      // Replace this with an actual page redirect if necessary:
      setTimeout(() => {
        alert('Redirecting to the welcome page...');
        // Replace this line to redirect to welcome.html after login:
        window.location.href = "welcome.html";  // Redirect to welcome page
      }, 1000);      
    }, 1000);
  });
  