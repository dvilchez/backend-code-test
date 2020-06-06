import RenameGeniallyService from "../../src/contexts/core/genially/application/RenameGeniallyService";
import GeniallyNotExist from "../../src/contexts/core/genially/domain/GeniallyNotExist";
import Genially from "../../src/contexts/core/genially/domain/Genially";

describe("RenameGeniallyService", () => {
  const genially = new Genially("id", "name", "description");
  const repository = {
    save: jest.fn().mockReturnThis(),
    find: jest.fn().mockReturnValue(genially),
    delete: jest.fn(),
  };
  const newName = {
      id: "id",
      name: "new name",
    };

  beforeEach(() => {
    repository.save.mockClear();
    repository.find.mockClear();
  });

  it("should rename a existent genially on the persistence layer", async () => {
    await new RenameGeniallyService(repository).execute(newName);

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return the modified genially", async () => {
    const genially = await new RenameGeniallyService(repository).execute(newName);

    expect(genially).toMatchObject(newName);
  });

  it("should throw an error if the genially doesn't exist", () => {
    repository.find.mockReturnValue(undefined);
    expect.hasAssertions();
    return new RenameGeniallyService(repository).execute(newName).catch(err => {
      expect(err).toBeInstanceOf(GeniallyNotExist);
    });
  });
});
