import "dotenv/config";
import "./config/db.js";
import e from "express";
import expeditionController from "./routers/expeditionRouter.js";
import explorerController from "./routers/explorerRouter.js";
import specieController from "./routers/specieRouter.js";

const app = e();

app.use(e.json());

app.use("/expedition", expeditionController);
app.use("/explorer", explorerController);
app.use("/specie", specieController);

app.listen(process.env.PORT, () => console.log("API is running!"));