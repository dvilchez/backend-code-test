import CreateGeniallyService from "../../src/contexts/core/genially/application/CreateGeniallyService";

describe("CreateGeniallyService", () => {
  const repository = {
    save: jest.fn().mockReturnThis(),
    find: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(() => {
    repository.save.mockClear();
  });

  it("should create a new genially on the persistence layer", async () => {
    await new CreateGeniallyService(repository).execute({
      id: "id",
      name: "name",
      description: "description",
    });

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return the created genially", async () => {
    const genially = await new CreateGeniallyService(repository).execute({
      id: "id",
      name: "name",
      description: "description",
    });

    expect(genially).toMatchObject({
      id: "id",
      name: "name",
      description: "description",
    });
  });
});
