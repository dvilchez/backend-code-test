import { Request, Response } from "express";
import httpStatus from "http-status";
import CreateGeniallyService from "../../contexts/core/genially/application/CreateGeniallyService";

export default class CreateGeniallyController {
  constructor(private createGenially: CreateGeniallyService) {}

  public async run(req: Request, res: Response) {
    const id: string = req.body.id;
    const name: string = req.body.name;
    const description: string = req.body.duration;

    try {
      await this.createGenially.execute({ id, name, description });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

    res.status(httpStatus.CREATED).send();
  }
}
