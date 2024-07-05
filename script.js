const apiKey = "ttuu993e7724453ebad4";
const senderId = "RRSMSG";
const message = "Dear Customer  Your order is out for delivery. Kindly keep the payment amount of Rs {#var#} ready. Thanks  RP";
const number = "919977890004"; // MULTIPLE NUMBER VARIABLES PUT HERE...!

const encodedMessage = encodeURIComponent(message); // encode the message content

const url = `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=${apiKey}&senderid=${senderId}&channel=2&DCS=0&flashsms=0&number=${number}&text=${encodedMessage}&route=1`;

fetch(url, {
  method: 'POST',
  mode: 'no-cors' // disable SSL verification
})
.then(response => response.text())
.then(data => console.log(data)) // print the result of the API call
.catch(error => console.error(error));
