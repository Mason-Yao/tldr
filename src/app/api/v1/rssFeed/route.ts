import { NextResponse } from "next/server";
import RssFeedService from "@/backend/services/rssFeedService";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();
  const rssFeeds = await new RssFeedService().getRssFeeds();
  return NextResponse.json(rssFeeds);
}
