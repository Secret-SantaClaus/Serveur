var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://secret-santaclaus.github.io/index.html"
    );
    res.write("Hello from CodeSandbox!"); //write a response to the client
    envoyerMail("pti.baub@gmail.com");

    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use false for STARTTLS; true for SSL on port 465
  auth: {
    user: "noel.secret.santaclaus@gmail.com",
    pass: "fbeu qdmg rxhk atlm ",
  },
});

function envoyerMail(email) {
  const mailOptions = {
    from: "noel.secret.santaclaus@gmail.com",
    to: email,
    subject: "Reussi",
    text: "Noël",
    html: "<p>Argh</p>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
