SMS Gateway API Client
=====================

This is a simple client for the SMS Gateway API. It sends a POST request to the API with the required parameters to send an SMS message.

**Usage**

1. Replace `YourAPIkey` with your actual API key.
2. Replace `TESTIN` with your actual sender ID.
3. Replace `YOUR MESSAGE HERE` with the message you want to send.
4. Replace `91989xxxxxxx` with the recipient's phone number.
5. Run the script using Node.js.

**Note**

* Make sure to encode the message content using `encodeURIComponent` to avoid any issues with special characters.
* This script uses the `fetch` API to make a POST request to the API. If you're using an older version of Node.js, you may need to use a polyfill or a different HTTP client library.

**Requirements**

* Node.js 14 or later
* Internet connection

**License**

This script is licensed under the MIT License. See the `LICENSE` file for details.
