import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const CONTACT_FILE = path.resolve(process.cwd(), 'contacts.json');
const ADMIN_PASSWORD = process.env.CONTACT_ADMIN_PASSWORD || 'mocknprep2024';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data || !data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    let contacts = [];
    try {
      const file = await fs.readFile(CONTACT_FILE, 'utf-8');
      contacts = JSON.parse(file);
    } catch {
      contacts = [];
    }
    contacts.push({ ...data, createdAt: new Date().toISOString() });
    await fs.writeFile(CONTACT_FILE, JSON.stringify(contacts, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save contact.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const password = req.nextUrl.searchParams.get('password');
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const file = await fs.readFile(CONTACT_FILE, 'utf-8');
    const contacts = JSON.parse(file);
    return NextResponse.json(contacts);
  } catch {
    return NextResponse.json([]);
  }
} 