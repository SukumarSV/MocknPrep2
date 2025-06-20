import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const FEEDBACK_FILE = path.resolve(process.cwd(), 'feedbacks.json');

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data || !data.feedback) {
      return NextResponse.json({ error: 'Feedback is required.' }, { status: 400 });
    }
    let feedbacks = [];
    try {
      const file = await fs.readFile(FEEDBACK_FILE, 'utf-8');
      feedbacks = JSON.parse(file);
    } catch {
      // file does not exist or is empty
      feedbacks = [];
    }
    feedbacks.push({ feedback: data.feedback, createdAt: new Date().toISOString() });
    await fs.writeFile(FEEDBACK_FILE, JSON.stringify(feedbacks, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save feedback.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const file = await fs.readFile(FEEDBACK_FILE, 'utf-8');
    const feedbacks = JSON.parse(file);
    return NextResponse.json(feedbacks);
  } catch {
    return NextResponse.json([]);
  }
} 