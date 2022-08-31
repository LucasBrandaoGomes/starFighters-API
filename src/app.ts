import cors from "cors";
import express from "express";
import battleRouter from "./routes/battleRouter";
import rankingRouter from "./routes/rankingRouter";
const app = express();
app.use(cors());
app.use(express.json());

app.use(battleRouter)
app.use(rankingRouter)

export default app;
