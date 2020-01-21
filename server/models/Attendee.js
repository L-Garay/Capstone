import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Attendee = new Schema(
  {
    userId: { type: ObjectId, required: true },
    outingId: { type: ObjectId, required: true },
    drinks: { type: Array },
    status: { type: Number, default: 0 },
    goneHome: { type: Boolean, default: false },
    location: { type: Object }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Attendee;