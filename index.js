var http = require("http");

let etat

http
  .createServer((req, res)=>{
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://secret-santaclaus.github.io"
    );
    if (req.url != "/") {
      let value
      let nom
      let mail
      let data = req.url
      data.split("?")
      data[1].split("&")
      value = data[1][0].split("=")
      nom = value[1]
      nom.shift()
      nom.pop()
      nom.split(",")
      value = data[1][0].spli("=")
      mail = value[1]
      mail = data[1].split("=")
      mail.shift()
      mail.pop()
      mail.split(",")

      let personne1 = Math.floor(Math.random() * (nom.length - 1));
      let NomPers1 = nom[personne1];
      let destinataire = personne1;
      let envoyeur;
      let longueur = nom.length - 1;

      for (let i = 0; i < longueur; i++) {
        envoyeur = mail[destinataire];
        nom.splice(destinataire, 1);
        mail.splice(destinataire, 1);
        let long = nom.length - 1;
        destinataire = Math.floor(Math.random() * long);
        envoyerMail(envoyeur, nom[destinataire]);
      }
      envoyerMail(mail[0], NomPers1);
    }
    res.write(req.url);
    res.end(etat);
  })
  .listen(8080);

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
      etat = "Error:" + error;
    } else {
      etat = "Email sent: " + info.response;
    }
  });
}
