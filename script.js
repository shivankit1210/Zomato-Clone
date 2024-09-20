function showInput() {
    const emailField = document.getElementById('emailField');
    const phoneField = document.getElementById('phoneField');
    const emailOption = document.getElementById('emailOption').checked;
    const phoneOption = document.getElementById('phoneOption').checked;

    // Show email field if 'Email' radio button is selected, hide phone field
    if (emailOption) {
        emailField.style.display = 'block';
        phoneField.style.display = 'none';
    }

    // Show phone field if 'Phone' radio button is selected, hide email field
    if (phoneOption) {
        phoneField.style.display = 'block';
        emailField.style.display = 'none';
    }
}

window.onload = function() {
    document.getElementById('emailField').style.display = 'block'; // Show email by default
    document.getElementById('phoneField').style.display = 'none';  // Hide phone by default
};