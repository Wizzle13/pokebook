async function signupFormHandler(event) { 
  event.preventDefault();
  
    const username = document.querySelector('#sign-name').value.trim();
    const email = document.querySelector('#sign-email').value.trim();
    const password = document.querySelector('#sign-pwd').value.trim();
    console.log("Help");
    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
         // check the response status
        if (response.ok) {
          document.location.replace('/quiz');
          console.log("ok");
        } else {
           alert(response.statusText);
           console.log("nope");
        }
    };
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);