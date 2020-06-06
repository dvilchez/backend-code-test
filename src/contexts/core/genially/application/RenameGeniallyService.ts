import Genially from "../domain/Genially";
import GeniallyNotExist from "../domain/GeniallyNotExist";
import GeniallyRepository from "../domain/GeniallyRepository";

type RenameGeniallyServiceRequest = {
  id: string;
  name: string;
};

export default class RenameGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: RenameGeniallyServiceRequest): Promise<Genially> {
    const { id, name } = req;

    const genially = await this.repository.find(id);
    if (!genially) throw new GeniallyNotExist(id);
    await this.repository.save(genially.rename(name));

    return genially;
  }
}
