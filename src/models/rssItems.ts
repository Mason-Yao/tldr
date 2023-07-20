import { Schema, model, models, Document, Types } from "mongoose";

export interface IRssItem extends Document {
  link: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  _rssId: Types.ObjectId;
  createdDate: Date;
  contentHash: string;
}

const rssItemSchema = new Schema<IRssItem>(
  {
    link: {
      type: String,
      required: true,
      unique: true,
    },
    title: String,
    subtitle: String,
    summary: String,
    image: String,
    _rssId: {
      type: Schema.Types.ObjectId,
      ref: 'RssFeed',
      required: true,
    },
    createdDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    contentHash: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const RssItem = models.RssItem || model<IRssItem>("RssItem", rssItemSchema);

export default RssItem;
