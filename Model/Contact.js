import { Schema, model } from "mongoose";
const connectSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timeStamp: true }
);
let ConnectModel = model("connect", connectSchema);
export default ConnectModel;
