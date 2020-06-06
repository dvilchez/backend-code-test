import { Express } from "express";
import { createGeniallyController, renameGeniallyController } from "../wire-guy";

export const register = (app: Express) => {
  app.post("/genialities", createGeniallyController.run.bind(createGeniallyController));
  app.put("/genialities/:id/name", renameGeniallyController.run.bind(renameGeniallyController));
};
