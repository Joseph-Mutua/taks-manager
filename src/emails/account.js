const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY =
  "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";

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "Mutuaj793@gmail.com",
      subject: "Thanks for Signing Up!",
      text: ` Welcome to the App, ${name}. Any feedback is highly Valued!`,
      html: `<p><strong>Welcome</strong> to the App, ${name}. Interact with it and give some feedback!</p>`,
    })
    .then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
};

const sendCancellationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "Mutuaj793@gmail.com",
      subject: "Sad to See you Go!",
      text: ` Goodbye, ${name}. I hope to see you again!`,
      html: `Goodbye ${name}. I hope to see you again!</p>`,
    })
    .then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
