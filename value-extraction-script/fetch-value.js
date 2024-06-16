const level = require('level');
const path = require('path');
const os = require('os');

// Replace 'YOUR_EXTENSION_ID' with your actual extension ID
const extensionId = 'hpkhkjmjdpcinpngjkmaknfejgkcmopm';

// Windows Path
const chromeProfilePath = path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data', 'Default', 'Local Extension Settings', extensionId);

// Mac / Linux Path
//const chromeProfilePath = path.join(os.homedir(), '.config', 'google-chrome', 'Default', 'Local Extension Settings', extensionId);

async function fetchValue() {
    const db = level(chromeProfilePath);
  
    try {
      const value = await db.get('key');
      console.log(`Found value: ${value}`);
    } catch (err) {
      if (err.notFound) {
        console.log('Key not found');
      } else {
        console.error('Error fetching value:', err);
      }
    }
  
    db.close();
  }