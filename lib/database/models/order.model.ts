import { Schema, model, models, Document } from 'mongoose';
import { Types } from 'mongoose';

export interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  event: {
    _id: string;
    title: string;
  };
  buyer: Types.ObjectId; // change buyer to be an ObjectId instead of a string
}

export type IOrderItem = {
  _id: string;
  totalAmount: string;
  createdAt: Date;
  eventTitle: string;
  eventId: string;
  buyer: string;
};

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Order = models.Order || model('Order', OrderSchema);

export default Order;
