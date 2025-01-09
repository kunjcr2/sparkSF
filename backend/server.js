import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { name } from "ejs";

const app = express();

const dbURI =
  "mongodb+srv://Kunj01052006:Kunj01052006@cluster0.4gpbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// SCHEMA FOR THE MEMBER
const schema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
});
const sparkSFUpdates = mongoose.model("sparkSFUpdates", schema);

// CONNECTING TO THE DATABSE
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5174, () => {
      console.log("Server is running on port 5174");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ADDING THE MEMBER
app.post("/add-member", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newMember = new sparkSFUpdates({ name: name, email: email });
    const result = await newMember.save();
    sendEmail(name, email);
    res.status(201).json({ Message: "Check Email !", result });
  } catch (err) {
    console.log(err);
  }
});

// API
app.get("/", async (req, res) => {
  const data = await sparkSFUpdates.find();
  res.json(data);
});

// SENDING THE E-MAIL
function sendEmail(name, email) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "kunjcr2@gmail.com",
      pass: "lyro hhir nexv dpzo",
    },
  });

  let msg = `Hello and Welcome to SparkSF, ${name}.`;

  const mailOptions = {
    from: "kunjcr2@gmail.com",
    to: email,
    subject: "Welcome to SparkSF!",
    text: msg,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent to", info.email);
    }
  });
}
