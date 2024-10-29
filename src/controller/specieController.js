import Specie from "../models/specieModel.js";

const store = async (req, res) => {
  try {
    const { name, discoveryLocation, rarity, documented } = req.body;

    await Specie.create({ name, discoveryLocation, rarity, documented });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Specie.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Specie.findById(req.params.id);

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, discoveryLocation, rarity, documented } = req.body;

    await Specie.findByIdAndUpdate(req.params.id, {
      name,
      discoveryLocation,
      rarity,
      documented,
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Specie.findByIdAndDelete(req.params.id).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};