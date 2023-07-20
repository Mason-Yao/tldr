import RssItems, { IRssItem } from "@/models/rssItems";
import { ObjectId } from "mongoose";

class RssItemsRepository {
  async createRssItems(rssItems: IRssItem[]) {
    const newRssItems = RssItems.insertMany(rssItems);
    return newRssItems;
  }

  async findRssItems() {
    const rssItems = await RssItems.find();
    return rssItems;
  }
}

export default RssItemsRepository;
