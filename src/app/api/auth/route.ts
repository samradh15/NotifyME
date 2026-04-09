// src/app/api/auth/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { message: 'Auth endpoint not implemented yet.' },
    { status: 501 }
  );
}
