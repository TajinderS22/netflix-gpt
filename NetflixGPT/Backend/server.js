/* eslint-disable no-unused-vars */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import client from "./genai.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  plan: String,
  joinedAt: {
    type: Date,
    defailt: Date.now,
  },
});

const userModel = mongoose.model("User", userSchema);

const allowedOrigins = [
  "http://localhost:5173",
  "https://netflixgpt.tajinder.in",
  "https://apinetflixgpt.tajinder.in",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

const app = express();
const port = process.env.PORT || 3004;
app.use(bodyParser.json());
app.use(cors(corsOptions));
const saltRounds = 10;

const uri = process.env.MONGO_DB_Uri;

// eslint-disable-next-line no-unused-vars
// const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 1) {
//       console.log(" MongoDB already connected");
//       return;
//     }

//     await mongoose.connect(uri);
//     console.log(" MongoDB connected");
//   } catch (error) {
//     console.error(" MongoDB connection error:", error);

//   }
// };

// connectDB();

// const client= await mongoose.connect(uri);

mongoose.connect(uri);

app.get("/", (req, res) => {
  res.json({
    name: "Tajinder Singh",
  });
});

app.post("/auth/signup", async (req, res) => {
  const { username, email, password } = req.body;

  console.log(req.body);

  // const hashedPassword= bcrypt.hash(password,saltRounds,(err,hash)=>{
  //     console.log(hash)
  // })
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const newUser = new userModel({
    name: username,
    email: email,
    password: hashedPassword,
    plan: "Free",
  });
  try {
    await newUser.save();
    console.log("Saved new user ");
    res.status(200).json(newUser);
  } catch (err) {
    if (err.errorResponse.errmsg.includes("duplicate key error collection")) {
      res.status(400).json({ message: " User already registered" });
    }
    console.log(err?.errorResponse?.errmsg);
  }
});

app.post("/gpt", async (req, res) => {
  const { querry } = req.body;
  const searchQuerry =
    "Act as a movies recommendation system and suggest some movies for the Querry:" +
    querry +
    ". Just give me the names of 5 movies, as comma seperated like the example Result given ahead .Example Result : gadar, Sholay, DON,  Golmaal ,  koi mil gaya.";
  try {
    // const GPTResults = await client.chat.send({
    //   chatGenerationParams: {
    //     model: "stepfun/step-3.5-flash:free",
    //     messages: [
    //       {
    //         role: "user",
    //         content: searchQuerry,
    //       },
    //     ],
    //     stream: false,
    //   },
    // });

    const result = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemma-4-31b-it:free",
          messages: [
            {
              role: "user",
              content: searchQuerry,
            },
          ],
          stream: false,
        }),
      },
    );

    let GPTResults = await result.json();

    GPTResults = GPTResults?.choices[0]?.message?.content;

    res.status(200).json(GPTResults);
  } catch (error) {
    console.error("GPT Error:", error);
    res.status(500).json({ error: "GPT API failed" });
  }
});

app.post("/auth/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  const user = await userModel.find({
    email: email,
  });
  console.log(user);
  if (user[0] != null) {
    if (bcrypt.compareSync(password, user[0].password)) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Wrong Password" });
    }
    return;
  }
  res.status(400).json({ message: " User Not Found" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`server is running on port ${port}.`);
});
