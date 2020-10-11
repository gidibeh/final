import mongoose from 'mongoose';

const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String},
  price: { type: Number, default: 0, required: true },
  category: { type: String},
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String },
  rating: { type: Number, default: 0},
  numReviews: { type: Number, default: 0 },
});

const productModel = mongoose.model("Product", prodctSchema);

export default productModel;