async function newFormHandler(event) {
    event.preventDefault();
  
    const post_message = document.querySelector('textarea[name="post-message"]').value;
    
    const response = await fetch(`/api/messages`, {
      method: 'POST',
      body: JSON.stringify({
        post_message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);