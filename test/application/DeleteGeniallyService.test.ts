import DeleteGeniallyService from "../../src/contexts/core/genially/application/DeleteGeniallyService";
import GeniallyNotExist from "../../src/contexts/core/genially/domain/GeniallyNotExist";
import Genially from "../../src/contexts/core/genially/domain/Genially";

describe("DeleteGeniallyService", () => {
  const genially = new Genially("id", "name", "description");
  const repository = {
    save: jest.fn().mockReturnThis(),
    find: jest.fn().mockReturnValue(genially),
    delete: jest.fn(),
  };

  beforeEach(() => {
    repository.save.mockClear();
    repository.find.mockClear();
  });

  it("should delete a existent genially on the persistence layer", async () => {
    await new DeleteGeniallyService(repository).execute({id: genially.id});

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return the deleted genially", async () => {
    const deletedGenially = await new DeleteGeniallyService(repository).execute({id: genially.id});

    expect(deletedGenially).toMatchObject(genially);
  });

  it("should throw an error if the genially doesn't exist", () => {
    repository.find.mockReturnValue(undefined);
    expect.hasAssertions();
    return new DeleteGeniallyService(repository).execute({id: genially.id}).catch(err => {
      expect(err).toBeInstanceOf(GeniallyNotExist);
    });
  });
});
