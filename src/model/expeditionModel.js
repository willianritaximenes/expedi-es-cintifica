import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  participants: {
    type: [Schema.ObjectId],
    ref: "Explorer",
  },
  speciesFound: {
    type: [Schema.ObjectId],
    ref: "Specie",
  },
});

const Expedition = model("Expedition", expeditionSchema);

export default Expedition;