document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup DOM fully loaded and parsed');

    // Store hardcoded value when the store button is clicked
    document.getElementById('storeButton').addEventListener('click', () => {
        console.log('Store button clicked');
        chrome.storage.local.set({ key: "superteam is awesome" }, () => {
            console.log("Value is set to 'superteam is awesome'");
        });
    });

    // Fetch value when the fetch button is clicked
    document.getElementById('fetchButton').addEventListener('click', () => {
        console.log('Fetch button clicked');
        chrome.storage.local.get(['key'], (result) => {
            console.log("Fetched value:", result.key);
            document.getElementById('value').innerText = result.key || 'No value found';
        });
    });
});
