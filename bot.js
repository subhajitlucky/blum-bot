require('dotenv').config();
// Import the Twilio SDK
const twilio = require('twilio');

// Your Twilio account credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Function to send WhatsApp message
const sendMessage = async (to, message) => {
  try {
    const messageResponse = await client.messages.create({
      from: 'whatsapp:+14155238886', // Your WhatsApp Sandbox number
      to: `whatsapp:${to}`, // The recipient's phone number
      body: message, // The message to send
    });
    console.log(`Message sent: ${messageResponse.sid} to ${to}`);
  } catch (error) {
    console.error(`Failed to send message to ${to}:`, error);
  }
};

// Array of recipient numbers (for now, use verified numbers)
const recipients = [
  '+918093555348',
  '+916371918118',
  '+919348491566',
  '+919752537202', 
  '+918102318600',
  '+919692995987',
  '+919777708989',
  '+918926026518',
  '+917815087310',
  '+917327850217',
  '+918763935958',
  '+919142025942',
  '+919438842571',
  '+918118064733',
  '+917077596247',
  '+918638204824',
  '+919475925855',
  '+917050165896',
  '+917209523026',
  '+917209127770',
  '+919508415172',
  '+919692488073',
  '+919337267406',
  '+917751029333',
  '+917205948249',
  '+916371806014',
  '+916370610910',
  '+917846856066',
  '+916370144090',
  '+919861993774',
];

// Message content
const message = 'Testing WhatsApp Bot for BLUM Screenshot';

// Function to send messages with delay
const sendMessagesWithDelay = async (recipients, message, delay) => {
  for (let i = 0; i < recipients.length; i++) {
    const number = recipients[i];
    await sendMessage(number, message); // Wait for the message to be sent

    // Wait for the specified delay before sending the next message
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
};

// Send the message to all recipients with a delay of 1 second (1000ms)
sendMessagesWithDelay(recipients, message, 1000);
