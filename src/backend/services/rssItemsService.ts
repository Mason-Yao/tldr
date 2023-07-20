import RssItemsRepository from "@/backend/repositories/rssItemsRepository";
import { IRssItem } from "@/models/rssItems";
import { ObjectId } from "mongoose";

class RssItemsService {
  private RssItemsRepository: RssItemsRepository;

  constructor() {
    this.RssItemsRepository = new RssItemsRepository();
  }

  async createNewRssItems(rssItems: IRssItem[]) {
    return await this.RssItemsRepository.createRssItems(rssItems);
  }

  async getRssItems() {
    return await this.RssItemsRepository.findRssItems();
  }
}

export default RssItemsService;
