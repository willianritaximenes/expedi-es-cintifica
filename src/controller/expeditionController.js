import Expedition from "../models/expeditionModel.js";

const store = async (req, res) => {
  try {
    const { location, date, participants, speciesFound } = req.body;

    await Expedition.create({ location, date, participants, speciesFound });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
};