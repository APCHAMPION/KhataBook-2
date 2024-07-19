document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.status === 400) {
            alert(result.message); // Display alert for existing user
            window.location.href = "/login";
        } else {
            alert(result.message); // Display success message
            window.location.href = "/";
        }
    } catch (error) {
        console.error('Error:', error);
    }
});