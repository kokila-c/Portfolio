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
  // You would have JavaScript code here to capture user's phone number and message,
  // and send the SMS using Twilio's API.
  alert("SMS feature is not implemented in this demo.");
}

function sendEmail() {
  // You would have JavaScript code here to capture user's email address and message,
  // and send the email using Twilio's SendGrid API or other email service provider.
  alert("Email feature is not implemented in this demo.");
}
