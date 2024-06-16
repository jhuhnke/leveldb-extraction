## Dependencies 

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Google Chrome**: [Download and install Google Chrome](https://www.google.com/chrome/)

## Loading The Extension In Chrome 

- Open Chrome and go to `chrome://extensions/`
- Enable Developer Mode
- Click "Load unpacked" and select the `hello-world-extension` directory

## Running the Script

### Linux/Mac

1. **Navigate to the Project Directory**:
    ```sh
    cd fetch_value_script
    ```

2. **Run the Script**:
    ```sh
    node fetch_value.js
    ```

### Windows

1. **Open Command Prompt or PowerShell**:
    - Press `Win + R`, type `cmd` or `powershell`, and press `Enter`

2. **Navigate to the Project Directory**:
    ```sh
    cd path\to\fetch_value_script
    ```

3. **Run the Script**:
    ```sh
    node fetch_value.js
    ```

This should print the stored value from the LevelDB database.

### Notes

- Replace `YOUR_EXTENSION_ID` with your actual extension ID. You can find this ID by going to `chrome://extensions/` in Chrome and enabling Developer Mode.
- For Windows users, the LevelDB path might differ. You may need to locate the exact path where Chrome stores the extension data. Typically, it can be found under:
  ```sh
  %LOCALAPPDATA%\Google\Chrome\User Data\Default\Local Extension Settings\YOUR_EXTENSION_ID
