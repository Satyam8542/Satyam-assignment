import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Doctor from '@/models/Doctor';

export async function GET(req: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const location = searchParams.get('location') || '';
  const specialty = searchParams.get('specialty') || '';

  try {
    const doctors = await Doctor.find({
      area: { $regex: new RegExp(location, 'i') },
      specialty: { $regex: new RegExp(specialty, 'i') },
    });
    return NextResponse.json(doctors);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  }
}
