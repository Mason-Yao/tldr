import { NextResponse } from "next/server";
import dailySummaryService from "@/backend/services/dailySummaryService";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();
  const subscribers = await new dailySummaryService().getDailySummaries();
  return NextResponse.json(subscribers);
}


export async function POST(request: Request) {
  await dbConnect();
  const res = await request.json();
  console.log(res);
  
}