import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: mongoose.Schema.ObjectId, //one who is subscribing
      ref: "User",
    },
    chanel: {
      type: mongoose.Schema.ObjectId, //one who is subsciber is subscribing
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
