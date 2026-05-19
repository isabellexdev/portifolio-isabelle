import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Preencha todos os campos.' }, { status: 400 });
  }

  await prisma.contact.create({ data: { name, email, message } });

  return NextResponse.json({ ok: true });
}