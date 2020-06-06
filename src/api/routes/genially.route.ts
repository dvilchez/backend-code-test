import { Express } from "express";
import { createGeniallyController } from "../wire-guy";

export const register = (app: Express) => {
  app.post("/genialities", createGeniallyController.run);
};
