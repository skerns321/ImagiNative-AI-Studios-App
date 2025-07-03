import { NextResponse } from "next/server";
import fs from "fs";
import OpenAI from "openai";

// Initialize OpenAI with API key validation
let openai: OpenAI | null = null;

try {
  if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
} catch (error) {
  console.error('Failed to initialize OpenAI client:', error);
}

export async function POST(req: Request) {
  // Check if OpenAI is available
  if (!openai) {
    return NextResponse.json(
      { error: 'OpenAI service not available. API key may be missing.' },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const base64Audio = body.audio;

    // Convert the base64 audio data to a Buffer
    const audio = Buffer.from(base64Audio, "base64");

    // Define the file path for storing the temporary WAV file
    const filePath = "tmp/input.wav";

    // Write the audio data to a temporary WAV file synchronously
    fs.writeFileSync(filePath, audio);

    // Create a readable stream from the temporary WAV file
    const readStream = fs.createReadStream(filePath);

    const data = await openai.audio.transcriptions.create({
      file: readStream,
      model: "whisper-1",
    });

    // Remove the temporary file after successful processing
    fs.unlinkSync(filePath);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing audio:", error);
    return NextResponse.json(
      { error: 'Failed to process audio transcription' },
      { status: 500 }
    );
  }
}
