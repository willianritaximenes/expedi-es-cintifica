import { Schema, model } from "mongoose";

const specieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discoveryLocation: {
    type: String,
    required: true,
  },
  rarity: {
    type: Number,
    required: true,
  },
  documented: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Specie = model("Specie", specieSchema);

export default Specie;