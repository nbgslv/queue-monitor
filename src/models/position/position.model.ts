import mongoose, { Schema } from 'mongoose';

enum PositionStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

interface Position extends mongoose.Document {
  name: string;
  status: PositionStatus;
}

const positionSchema: Schema<Position> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: PositionStatus,
      required: true,
      default: PositionStatus.INACTIVE,
    },
  },
  { timestamps: true }
);

const positionModel = { model: mongoose.model('position', positionSchema), positionSchema };

export default positionModel;
