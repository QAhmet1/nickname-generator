document.getElementById('generateBtn').addEventListener('click', function () {
    let length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecialChars = document.getElementById('specialChars').checked;
  
    // Warn the user if the nickname length exceeds the maximum limit
    if (length > 33) {
      alert('Warning: Nickname length cannot exceed 33 characters! The length has been adjusted to 33.');
      length = 33; // Adjust length to maximum allowed value
      document.getElementById('length').value = length; // Update input field visually
    }
  
    // Warn the user if the nickname length is below the minimum limit
    if (length < 3) {
      alert('Warning: Nickname length cannot be less than 3 characters! The length has been adjusted to 3.');
      length = 3; // Adjust length to minimum allowed value
      document.getElementById('length').value = length; // Update input field visually
    }
  
    // Character pools
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let charPool = '';
  
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSpecialChars) charPool += specialChars;
  
    // Ensure at least one character type is selected
    if (charPool === '') {
      alert('Please select at least one character type!');
      return;
    }
  
    let nickname = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      nickname += charPool[randomIndex];
    }
  
    // Display the generated nickname
    document.getElementById('nicknameOutput').textContent = nickname;
  });