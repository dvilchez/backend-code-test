import httpStatus from "http-status";
import DeleteGeniallyController from "../../src/api/controllers/DeleteGeniallyController";
import DeleteGeniallyService from "../../src/contexts/core/genially/application/DeleteGeniallyService";
import Genially from "../../src/contexts/core/genially/domain/Genially";

describe("Delete genially", () => {
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
  const deleteGenially = new DeleteGeniallyService(repository);
  const deleteGeniallyController = new DeleteGeniallyController(deleteGenially);

  beforeEach(() => {
    req = {
      params: { id: "id" },
    };
    repository.save.mockClear();
    repository.find.mockClear();
    response.status.mockClear();
  });

  it("should rename a existent genially on the persistence layer", async () => {
    await deleteGeniallyController.run(req, response);

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return http status DELETED", async () => {
    await deleteGeniallyController.run(req, response);

    expect(response.status).toHaveBeenCalledWith(httpStatus.NO_CONTENT);
  });

  it("should return http status bad request if the genially doesn't exist", async () => {
    repository.find.mockReturnValue(undefined);
    await deleteGeniallyController.run(req, response);

    expect(response.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST);
  });
});
