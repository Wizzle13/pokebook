async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#sign-name').value.trim();
    const password = document.querySelector('#sign-pwd').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.login').addEventListener('submit', loginFormHandler);