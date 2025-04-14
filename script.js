document.getElementById('generateBtn').addEventListener('click', function () {
    let length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecialChars = document.getElementById('specialChars').checked;
  
    // Warn the user if the length is greater than 33
    if (length > 33) {
      alert('Warning: Nickname length cannot exceed 33 characters! Please adjust your input.');
      length = 33; // Automatically adjust the length to the maximum allowed
      document.getElementById('length').value = length; // Update input field visually
    }
  
    // Validate nickname length boundaries
    if (length < 3) {
      alert('Nickname length must be at least 3 characters!');
      length = 3; // Automatically adjust the length to the minimum allowed
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
  
    if (charPool === '') {
      alert('Please select at least one character type!');
      return;
    }
  
    let nickname = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      nickname += charPool[randomIndex];
    }
  
    document.getElementById('nicknameOutput').textContent = nickname;
  });