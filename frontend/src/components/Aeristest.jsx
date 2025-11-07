import React, { useState } from "react";
import OpenAI from "openai";
console.log("API Key:", import.meta.env.VITE_OPENAI_API_KEY);

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function AerisTest() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    setResponse("Thinking...");
    try {
      const res = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are AERIS, an AI designed for Mars ecosystem reasoning." },
          { role: "user", content: prompt },
        ],
      });
      setResponse(res.choices[0].message.content);
    } catch (err) {
      setResponse("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 text-gray-100 rounded-2xl shadow-lg">
      <h1 className="text-xl font-semibold mb-3 text-center text-cyan-300">AERIS Prototype</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AERIS something..."
        className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
      />
      <button
        onClick={handleAsk}
        className="mt-3 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md w-full"
      >
        Ask
      </button>
      <p className="mt-4 whitespace-pre-wrap text-gray-300">{response}</p>
    </div>
  );
}
