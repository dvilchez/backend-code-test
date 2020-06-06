import { Request, Response } from "express";
import httpStatus from "http-status";
import RenameGeniallyService from "../../contexts/core/genially/application/RenameGeniallyService";
import IncorrectGeniallyNameValue from "../../contexts/core/genially/domain/IncorrectGeniallyNameValue";
import IncorrectGeniallyDescriptionValue from "../../contexts/core/genially/domain/IncorrectGeniallyDescriptionValue";
import GeniallyNotExist from "../../contexts/core/genially/domain/GeniallyNotExist";

export default class RenameGeniallyController {
  constructor(private renameGenially: RenameGeniallyService) {}

  public async run(req: Request, res: Response) {
    const id: string = req.params.id;
    const name: string = req.body.name;

    try {
      await this.renameGenially.execute({ id, name });
    } catch (error) {
      if (
        error instanceof IncorrectGeniallyNameValue ||
        error instanceof IncorrectGeniallyDescriptionValue ||
        error instanceof GeniallyNotExist
      ) {
        res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
      } else {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      }
    }

    res.status(httpStatus.OK).send();
  }
}
