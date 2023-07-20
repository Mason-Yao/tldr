import { NextResponse } from "next/server";
import SubscriberService from "@/backend/services/subscriberService"
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();
  const subscribers = await new SubscriberService().getSubscribers();
  return NextResponse.json(subscribers);
}