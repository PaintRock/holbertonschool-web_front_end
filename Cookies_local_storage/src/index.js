// index.js


function setCookies() {
    const firstNameValue = document.getElementById('firstname').value;
    const emailValue = document.getElementById('email').value;

    // Set cookies with expiration in 10 days
    const firstNameExpiration = new Date();
    firstNameExpiration.setTime(firstNameExpiration.getTime() + (10 * 24 * 60 * 60 * 1000));
    document.cookie = `firstname=${firstNameValue}; expires=${firstNameExpiration.toUTCString()}`;

    const emailExpiration = new Date();
    emailExpiration.setTime(emailExpiration.getTime() + (10 * 24 * 60 * 60 * 1000));
    document.cookie = `email=${emailValue}; expires=${emailExpiration.toUTCString()}`;
}




function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

function showCookies() {
    const firstNameCookie = getCookie('firstname');
    const emailCookie = getCookie('email');
    
    const cookiesOutput = `First Name: ${firstNameCookie}\nEmail: ${emailCookie}`;
    alert(cookiesOutput);
}
function hideWelcomeMessage() {
    const welcomeMessageDiv = document.querySelector('.welcome-message');
    if (welcomeMessageDiv) {
        welcomeMessageDiv.style.display = 'none'; // Hide the welcome message
    }
}

function showWelcomeMessage() {
    const welcomeMessageDiv = document.querySelector('.welcome-message');
    const loginFormDiv = document.querySelector('.login-container');

    if (welcomeMessageDiv) {
        welcomeMessageDiv.innerHTML = ''; // Clear existing content
        const h1Element = document.createElement('h1');
        const firstName = getCookie('firstname');

        if (firstName) {
            // If user is logged in
            h1Element.textContent = `Welcome ${firstName}`;
            const logoutLink = document.createElement('a');
            logoutLink.textContent = '(logout)';
            logoutLink.style.fontStyle = 'italic';
            logoutLink.style.fontWeight = 'normal';
            logoutLink.style.marginLeft = '10px';
            logoutLink.href = '#';
            logoutLink.onclick = function () {
                deleteCookiesAndShowLoginForm();
                return false;
            };
            h1Element.appendChild(logoutLink);
        } else {
            // If user is not logged in
            h1Element.textContent = 'Welcome'; // Display a default welcome message
        }

        welcomeMessageDiv.appendChild(h1Element);
    }

    hideLoginForm(); // Hide the login form
    if (welcomeMessageDiv) {
        welcomeMessageDiv.style.display = 'block'; // Show the welcome message
    }
}

function deleteCookiesAndShowLoginForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    hideWelcomeMessage(); // Hide the welcome message after deleting cookies
    showLoginForm(); // Show the login form
}

function showLoginForm() {
    const loginFormDiv = document.querySelector('.login-container');
    if (loginFormDiv) {
        loginFormDiv.style.display = 'block'; // Show the login form
    }
}

function hideLoginForm() {
    const loginFormDiv = document.querySelector('.login-container');
    if (loginFormDiv) {
        loginFormDiv.style.display = 'none'; // Hide the login form
    }
}
function setCookiesAndShowWelcome() {
    setCookies();
    showWelcomeMessage();
}

// Update the button onclick to call setCookiesAndShowWelcome

// Call showLoginForm on page load to display the login form initially
window.onload = showLoginForm;