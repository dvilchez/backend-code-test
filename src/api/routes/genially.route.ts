import { Express } from "express";
import { createGeniallyController, renameGeniallyController, deleteGeniallyController } from "../wire-guy";

export const register = (app: Express) => {
  app.put("/genialities/:id/name", renameGeniallyController.run.bind(renameGeniallyController));
  app.delete("/genialities/:id", deleteGeniallyController.run.bind(deleteGeniallyController));
  app.post("/genialities", createGeniallyController.run.bind(createGeniallyController));
};
