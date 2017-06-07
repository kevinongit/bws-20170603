import * as mongoose from 'mongoose';

const golfclubSchema = new mongoose.Schema({
  golf_type: String,
  company_name: String,
  xcoord: String,
  ycoord: String,
  name: String,
  address: String,
  phone: String,
  uid: String,
  area: String,
  classification: String,
  fee_cart: Number,
  fee_caddy: Number,
  homePage: String,
  map_level: String,
  fee_url: String,
  desc: String,
  updated: Date
});

const Golfclub = mongoose.model('Golfclub', golfclubSchema);

export default Golfclub;
