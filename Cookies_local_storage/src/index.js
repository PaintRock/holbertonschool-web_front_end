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


function showCookies() {
    const firstNameCookie = getCookie('firstname');
    const emailCookie = getCookie('email');
    
    const cookiesOutput = `First Name: ${firstNameCookie}\nEmail: ${emailCookie}`;
    alert(cookiesOutput);
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
function showWelcomeMessageOrForm() {
    var firstName = getCookie('firstname');
    var welcomeMessageDiv = document.querySelector('.welcome-message');
    var loginFormDiv = document.querySelector('.login-form');

    if (firstName) {
        // If user is logged in
        if (welcomeMessageDiv) {
            welcomeMessageDiv.innerHTML = ''; // Clear existing content
            var welcomeMessage = document.createElement('h1');
            welcomeMessage.textContent = `Welcome ${firstName}`;
            var logoutLink = document.createElement('a');
            logoutLink.textContent = '(logout)';
            logoutLink.style.fontStyle = 'italic';
            logoutLink.style.fontWeight = 'normal';
            logoutLink.style.marginLeft = '10px';
            logoutLink.href = '#';
            logoutLink.onclick = function () {
                deleteCookiesAndShowForm();
                return false;
            };
            welcomeMessage.appendChild(logoutLink);
            welcomeMessageDiv.appendChild(welcomeMessage);
        }
        if (loginFormDiv) {
            loginFormDiv.style.display = 'none'; // Hide the login form
        }
    } else {
        // If user is not logged in
        if (welcomeMessageDiv) {
            welcomeMessageDiv.style.display = 'none'; // Hide the welcome message
        }
        if (loginFormDiv) {
            loginFormDiv.style.display = 'block'; // Show the login form
        }
    }
}

