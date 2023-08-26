function submit() {
    var pass = document.getElementById("password").value;
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: pass }) // Send the password in the request body
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            window.location.href = "code.html";
        } else {
            var title = document.getElementById("title");
            title.innerHTML = "RUN AWAY FROM HERE !!!";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
