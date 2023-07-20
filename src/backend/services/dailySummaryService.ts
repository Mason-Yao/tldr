import DailySummaryRepository from '@/backend/repositories/dailySummaryRepository';
import { ObjectId } from 'mongoose';

class DailySummaryService {
  private DailySummaryRepository: DailySummaryRepository;

  constructor() {
    this.DailySummaryRepository = new DailySummaryRepository();
  }

  async createNewDailySummary(_rssId: ObjectId, rssItems: ObjectId[], date: Date) {
    return await this.DailySummaryRepository.createDailySummary(_rssId, rssItems, date);
  }

  async getDailySummaries() {
    return await this.DailySummaryRepository.findDailySummaries();
  }
}

export default DailySummaryService;
