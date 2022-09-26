import app from "./app";
import { PkmRouter } from "./router/PkmRouter";

app.use('/pkm', PkmRouter)