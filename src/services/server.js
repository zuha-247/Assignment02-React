import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/ask-ai", async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    const reply = result.choices[0].message.content;
    res.json({ response: reply });

  } catch (err) {
    console.error(err);
    res.json({ error: "AI request failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
