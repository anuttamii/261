function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Application-key': 'TU16a3e1e28327b69ad6f0591fa6b273398d36b72fdce62df09c9f384f6c297bfd739063e2261fe1a7b02bf8b0cf475e6c',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             "UserName":username, 
             "PassWord":password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}

