import { myFunction } from "sendSMS.js";

function toggleFullscreen(image) {
  if (!document.fullscreenElement) {
    image.classList.add("fullscreen");
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message}`
      );
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      image.classList.remove("fullscreen");
    }
  }
}
function sendSMS() {
  // code in main.js

  myFunction(); // Call function from other file

  // fetch("/sendSMS", {
  //   method: "POST",
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Failed to send SMS");
  //     }
  //     return response.text(); // Read the response as text
  //   })
  //   .then((text) => {
  //     alert("SMS sent successfully");
  //   })
  //   .catch((error) => alert("Failed to send SMS: " + error.message));

  // You would have JavaScript code here to capture user's phone number and message,
  // and send the SMS using Twilio's API.
  alert("SMS feature is not implemented in this demo.");
}

function sendEmail() {
  // You would have JavaScript code here to capture user's email address and message,
  // and send the email using Twilio's SendGrid API or other email service provider.
  alert("Email feature is not implemented in this demo.");
}
