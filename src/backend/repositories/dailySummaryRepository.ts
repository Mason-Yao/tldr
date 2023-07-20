import DailySummary from '@/models/rssFeed';
import { ObjectId } from 'mongoose';

class DailySummaryRepository {
  async createDailySummary(_rssId: ObjectId, rssItems: ObjectId[], date: Date) {
    const rssFeed = new DailySummary({ _rssId, rssItems, date });
    await rssFeed.save();
    return rssFeed;
  }

  async findDailySummaries() {
    const dailySummary = await DailySummary.find();
    return dailySummary;
  }
}

export default DailySummaryRepository;
