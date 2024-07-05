const apiKey = "YourAPIkey";
const senderId = "TESTIN";
const message = "YOUR MESSAGE HERE";
const number = "91989xxxxxxx"; // MULTIPLE NUMBER VARIABLES PUT HERE...!

const encodedMessage = encodeURIComponent(message); // encode the message content

const url = `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=${apiKey}&senderid=${senderId}&channel=2&DCS=0&flashsms=0&number=${number}&text=${encodedMessage}&route=1`;

fetch(url, {
  method: 'POST',
  mode: 'no-cors' // disable SSL verification
})
.then(response => response.text())
.then(data => console.log(data)) // print the result of the API call
.catch(error => console.error(error));
