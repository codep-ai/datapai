const express = require('express')
const path = require('path');
const app = express();
let bodyParser = require('body-parser');
const port = 3002
const nodemailer = require('nodemailer');
const { google } = require("googleapis");

// It should add OAuth2client Id, key and Token
const emailClientId = '';
const emailClientKey = '';
const emailRefreshToken = '';

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  emailClientId,
  emailClientKey,
  "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: emailRefreshToken
});

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/integrations', (req, res) => {
  res.render('integrations')
});

app.get('/contact', (req, res) => {
  res.render('contactus')
});

app.get('/ourteam', (req, res) => {
  res.render('ourteam')
});

// app.get('/pricing', (req, res) => {
//   res.render('pricing')
// });

app.get('/register', (req, res) => {
  res.render('register')
});

// app.get('/company', (req, res) => {
//   res.render('company')
// });

app.get('/products', (req, res) => {
  res.render('products')
});

app.get('/demo', (req, res) => {
  res.render('demo')
});

app.get('/products/ai-solutions', (req, res) => {
  res.render('ai-solutions')
});

app.get('/products/data-management', (req, res) => {
  res.render('data-management')
});

app.get('/products/analytics', (req, res) => {
  res.render('analytics')
});

app.get('/di/benefits', (req, res) => {
  res.render('benefits')
});

app.get('/di/use-cases', (req, res) => {
  res.render('use-cases')
});

app.get('/di/etl', (req, res) => {
  res.render('etl')
});

app.get('/di/data-quality', (req, res) => {
  res.render('data-quality')
});

app.get('/di/data-catalog', (req, res) => {
  res.render('data-catalog')
});

app.get('/di/informatica', (req, res) => {
  res.render('informatica')
});

app.get('/di/real-time', (req, res) => {
  res.render('real-time')
});

app.get('/di/docs', (req, res) => {
  res.render('docs')
});

app.get('/di/tutorials', (req, res) => {
  res.render('tutorials')
});

app.get('/di/webinars', (req, res) => {
  res.render('webinars')
});

app.get('/genai', (req, res) => {
  res.render('genai')
});

app.get('/services', (req, res) => {
  res.render('services')
});

app.get('/services/consulting', (req, res) => {
  res.render('consulting')
});

app.get('/services/implementation', (req, res) => {
  res.render('implementation')
});

app.get('/services/training', (req, res) => {
  res.render('training')
});

/*
app.get('/resources', (req, res) => {
  res.render('resources')
});

app.get('/customers', (req, res) => {
  res.render('customers')
});

app.get('/gallery', (req, res) => {
  res.render('gallery')
});
*/
app.post('/contact', (req, res) => {
  sendEmail(req.body, "contact form", function () {
    res.json(req.body);
  });
});

app.post('/register', (req, res) => {
  sendEmail(req.body, "register form", function () {
    res.json(req.body);
  });
});

app.listen(port, () => console.log(`DataPai PAI listening on http://127.0.0.1:${port}!`));

async function sendEmail(payload, subject, next) {
  try {
    const tokens = await oauth2Client.getAccessToken();
    const accessToken = tokens.token;

    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "betopsoft@gmail.com",
        clientId: emailClientId,
        clientSecret: emailClientKey,
        refreshToken: emailRefreshToken,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: 'customer@codepai.com.au',
      to: 'info@datap.ai',
      subject: subject,
      html: JSON.stringify(payload)
    };

    smtpTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
      smtpTransport.close();
      next();
    });
  } catch (error) {
    console.log('Error sending email', error);
    next(error);
  }
}
