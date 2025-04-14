// Event listener for nickname generation
document.getElementById('generateBtn').addEventListener('click', function () {
    // Get user inputs
    let length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecialChars = document.getElementById('specialChars').checked;
  
    // Validate nickname length boundaries
    if (length > 33) {
      alert('Warning: Nickname length cannot exceed 33 characters! The length has been adjusted to 33.');
      length = 33; // Adjust to max length
      document.getElementById('length').value = length;
    } else if (length < 3) {
      alert('Warning: Nickname length cannot be less than 3 characters! The length has been adjusted to 3.');
      length = 3; // Adjust to min length
      document.getElementById('length').value = length;
    }
  
    // Character pools
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let charPool = '';
  
    // Add selected character types to pool
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSpecialChars) charPool += specialChars;
  
    // Ensure at least one character type is selected
    if (charPool === '') {
      alert('Please select at least one character type!');
      return;
    }
  
    // Generate nickname
    let nickname = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      nickname += charPool[randomIndex];
    }
  
    // Display generated nickname
    document.getElementById('nicknameOutput').textContent = nickname;
  });
  
  // Event listener for copying nickname
  document.getElementById('copyBtn').addEventListener('click', function () {
    const nickname = document.getElementById('nicknameOutput').textContent;
  
    // Check if a nickname has been generated
    if (nickname === "Your nickname will appear here" || nickname === "") {
      alert("No nickname to copy! Generate one first.");
      return;
    }
  
    // Copy the nickname to clipboard
    navigator.clipboard.writeText(nickname)
      .then(() => {
        // Show tick icon
        const tickIcon = document.getElementById('copyTick');
        tickIcon.style.display = 'inline'; // Make the tick icon visible
  
        // Hide tick icon after 2 seconds
        setTimeout(() => {
          tickIcon.style.display = 'none';
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy the nickname:", err);
      });
  });