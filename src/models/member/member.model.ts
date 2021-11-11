import mongoose, { Schema } from 'mongoose';

enum MemberStatus {
  WAITING = 'WAITING',
  SERVED = 'SERVED',
  PASSED = 'PASSED',
}

interface Member extends mongoose.Document {
  firstName: string;
  lastName?: string;
  queue: typeof mongoose.Types.ObjectId;
  phoneNumber?: string;
  number: number;
  status: MemberStatus;
  position: typeof mongoose.Types.ObjectId;
}

const memberSchema: Schema<Member> = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    queue: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    phoneNumber: String,
    number: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: MemberStatus,
      required: true,
      default: MemberStatus.WAITING,
    },
    position: {
      type: mongoose.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const memberModel = { model: mongoose.model('member', memberSchema), memberSchema };

export default memberModel;
