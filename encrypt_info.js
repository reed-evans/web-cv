// Phone number and email obfuscation using XOR
// Encrypted data stored as character codes
const encryptedPhone = [71, 3, 3, 92, 12, 6, 67, 26, 10, 67, 2, 0];
const encryptedEmail = [0, 81, 1, 70, 0, 10, 50, 87, 92, 30, 65, 94, 16, 93, 82, 92, 81, 87, 7];
const key = "r43";

// Helper function to encrypt text (use in browser console)
function encryptText(text, key) {
    const result = [];
    for (let i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    console.log('Encrypted array:', JSON.stringify(result));
    return result;
}

function xorDecrypt(encoded, key) {
    let result = '';
    for (let i = 0; i < encoded.length; i++) {
        result += String.fromCharCode(encoded[i] ^ key.charCodeAt(i % key.length));
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function () {
    const phoneLink = document.querySelector('.phone-obfuscated');
    const emailLink = document.querySelector('.email-obfuscated');

    function showPhone() {
        const phone = xorDecrypt(encryptedPhone, key);
        phoneLink.textContent = phone;
        phoneLink.href = 'tel:+1' + phone.replace(/\./g, '');
    }

    function showEmail() {
        const email = xorDecrypt(encryptedEmail, key);
        emailLink.textContent = email;
        emailLink.href = 'mailto:Reed Evans <' + email + '>';
        emailLink.target = '_blank';
    }

    phoneLink.addEventListener('mouseenter', showPhone);
    phoneLink.addEventListener('click', showPhone);

    emailLink.addEventListener('mouseenter', showEmail);
    emailLink.addEventListener('click', showEmail);

    // Reveal phone and email when printing
    window.addEventListener('beforeprint', function () {
        showPhone();
        showEmail();
    });
});
