function submitWish() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const wish = document.getElementById('wish').value;

    if (name && email && wish) {
        const wishesList = document.getElementById('wishes-list');

        // Check for bad wishes (modify this condition based on your criteria)
        if (wish.toLowerCase().includes('badword')) {
            alert('Sorry, your wish contains inappropriate content.');
            return;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        const wishItem = document.createElement('div');
        wishItem.innerHTML = `<p><strong>${name} (${email}):</strong> ${sanitizeHtml(wish)}<br><em>Submitted at ${formattedDate}</em></p><hr>`;
        wishesList.appendChild(wishItem);

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('wish').value = '';
    } else {
        alert('Please enter your name, email, and wish.');
    }
}

// Sanitize HTML to prevent XSS
function sanitizeHtml(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}