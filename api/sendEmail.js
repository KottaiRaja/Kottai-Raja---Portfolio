const mailgun = require("mailgun-js");

// API KEY: a45aca5c098021ee68565d94e7036856-2b77fbb2-1cfa13d3

const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: DOMAIN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { from, subject, text } = req.body;

  const data = {
    from,
    to: "kottairaja1220@gmail.com", // or make dynamic
    subject,
    text,
  };

  mg.messages().send(data, (error, body) => {
    if (error) return res.status(500).json({ error });
    res.status(200).json({ success: true, body });
  });
}
