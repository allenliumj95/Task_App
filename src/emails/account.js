const sgMail = require("@sendgrid/mail");

// const sendgrdiAPIKey =
//   "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pliu4236@uni.sydney.edu.au",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pliu4236@uni.sydney.edu.au",
    subject: "Sorry to see you go",
    text: `Goodbye, ${name}. I hope to see you back soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
