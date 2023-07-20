import RssFeedRepository from '@/backend/repositories/rssFeedRepository';

class RssFeedService {
  private RssFeedRepository: RssFeedRepository;

  constructor() {
    this.RssFeedRepository = new RssFeedRepository();
  }

  async createNewRssFeed(name: string, link: string, lastFetchedTime: Date) {
    return await this.RssFeedRepository.createRssFeed(name, link, lastFetchedTime);
  }

  async getRssFeeds() {
    return await this.RssFeedRepository.findRssFeeds();
  }

  async deleteRssFeedByLink(link: string) {
    return await this.RssFeedRepository.deleteRssFeedByLink(link);
  }
}

export default RssFeedService;
