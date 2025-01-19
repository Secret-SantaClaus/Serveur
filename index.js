var http = require("http");

http
  .createServer((req, res)=>{
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://secret-santaclaus.github.io"
    );
    res.write(toString(req));
    

    /*
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
    */
    
    res.end();
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
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
