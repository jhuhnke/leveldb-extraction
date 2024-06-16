document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetchButton').addEventListener('click', () => {
        chrome.storage.local.get(['key'], (result) => {
            document.getElementById('value').innerText = result.key;
        });
    });
});