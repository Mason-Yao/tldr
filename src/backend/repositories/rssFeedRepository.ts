import RssFeed from '@/models/rssFeed';

class RssFeedRepository {
  async createRssFeed(name: string, link: string, lastFetchedTime: Date) {
    const rssFeed = new RssFeed({ name, link, lastFetchedTime });
    await rssFeed.save();
    return rssFeed;
  }

  async findRssFeeds() {
    const rssFeeds = await RssFeed.find();
    console.log(rssFeeds);
    return rssFeeds;
  }

  async deleteRssFeedByLink(link: string) {
    const deletedRssFeed = await RssFeed.findOneAndDelete({ link });
    return deletedRssFeed;
  }
}

export default RssFeedRepository;
