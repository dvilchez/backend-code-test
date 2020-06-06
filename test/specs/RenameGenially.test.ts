import httpStatus from "http-status";
import RenameGeniallyController from "../../src/api/controllers/RenameGeniallyController";
import RenameGeniallyService from "../../src/contexts/core/genially/application/RenameGeniallyService";
import Genially from "../../src/contexts/core/genially/domain/Genially";

describe("Rename genially", () => {
  let req: any;
  const genially = new Genially("id", "name", "description");
  const response: any = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
    json: jest.fn(),
  };
  const repository: any = {
    save: jest.fn(),
    find: jest.fn().mockReturnValue(genially),
    delete: jest.fn(),
  };
  const renameGenially = new RenameGeniallyService(repository);
  const renameGeniallyController = new RenameGeniallyController(renameGenially);

  beforeEach(() => {
    req = {
      params: { id: "id" },
      body: { name: "new name" },
    };
    repository.save.mockClear();
    repository.find.mockClear();
    response.status.mockClear();
  });

  it("should rename a existent genially on the persistence layer", async () => {
    await renameGeniallyController.run(req, response);

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return http status OK", async () => {
    await renameGeniallyController.run(req, response);

    expect(response.status).toHaveBeenCalledWith(httpStatus.OK);
  });

  it("should return http status bad request if the genially doesn't exist", async () => {
    repository.find.mockReturnValue(undefined);
    await renameGeniallyController.run(req, response);

    expect(response.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST);
  });
});
