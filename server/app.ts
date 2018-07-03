import * as express from "express";
import { initApp } from "./Middleware";

export const app = express();

initApp(app);
