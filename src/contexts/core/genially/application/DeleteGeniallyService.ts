import Genially from "../domain/Genially";
import GeniallyNotExist from "../domain/GeniallyNotExist";
import GeniallyRepository from "../domain/GeniallyRepository";

type DeleteGeniallyServiceRequest = {
  id: string;
};

export default class DeleteGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: DeleteGeniallyServiceRequest): Promise<Genially> {
    const { id } = req;

    const genially = await this.repository.find(id);
    if (!genially) throw new GeniallyNotExist(id);
    await this.repository.save(genially.delete());

    return genially;
  }
}
