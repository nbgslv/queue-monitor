import mongoose, { Schema } from 'mongoose';

enum QueueStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

interface Queue extends mongoose.Document {
  name: string;
  active: boolean;
  status: QueueStatus;
}

const queueSchema: Schema<Queue> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      enum: QueueStatus,
      required: true,
      default: QueueStatus.INACTIVE,
    },
  },
  { timestamps: true }
);

const queueModel = { model: mongoose.model('queue', queueSchema), queueSchema };

export default queueModel;
