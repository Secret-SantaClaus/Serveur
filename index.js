var http = require("http");

http
  .createServer((req, res)=>{
    let reponse = "reussi";
    if (req.method == "POST") {
      res.writeHead(200, {'Access-Control-Allow-Origin' : 'https://secret-santaclaus.github.io'});
      
      let data = req.url.split("&");
      let nom = data[0].split("=")[1];
      nom = nom.substring(3, nom.length -7).split("%2C");
      let mail = data[1].split("=")[1];
      mail = mail.substring(3, mail.length -7).split("%2C");
      
      let personne1 = Math.floor(Math.random() * (nom.length - 1));
      let nomPers1 = nom[personne1];
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
      envoyerMail(mail[0], nomPers1);
      reponse = etat
    }  else {
      res.writeHead(403, {'Access-Control-Allow-Origin' : 'https://secret-santaclaus.github.io/'});
      reponse = "Accès refusé"
    }
    res.write(reponse);
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

function envoyerMail(email, dest) {
  const mailOptions = {
    from: "noel.secret.santaclaus@gmail.com",
    to: email,
    subject: "Reussi",
    text: "Noël",
    html: "<p>Bonjour<br>Vous devez acheter un cadeau pour </p>"+dest,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      let etat = "Error:" + error;
    } else {
      let etat = "Email sent: " + info.response;
    }
  });
  return etat
}
