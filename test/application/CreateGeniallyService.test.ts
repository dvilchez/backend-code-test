import CreateGeniallyService from "../../src/contexts/core/genially/application/CreateGeniallyService";

describe("CreateGeniallyService", () => {
  const repository = {
    save: jest.fn().mockReturnThis(),
    find: jest.fn(),
    delete: jest.fn(),
  };
  const newGenially = {
    id: "id",
    name: "name",
    description: "description",
  };

  beforeEach(() => {
    repository.save.mockClear();
  });

  it("should create a new genially on the persistence layer", async () => {
    await new CreateGeniallyService(repository).execute(newGenially);

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return the created genially", async () => {
    const genially = await new CreateGeniallyService(repository).execute(newGenially);

    expect(genially).toMatchObject(genially);
  });
});
