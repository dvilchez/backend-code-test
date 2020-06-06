import httpStatus from "http-status";
import CreateGeniallyController from "../../src/api/controllers/CreateGeniallyController";
import CreateGeniallyService from "../../src/contexts/core/genially/application/CreateGeniallyService";

describe("Create new genially", () => {
  const req: any = {
    body: {
      name: "name",
      description: "description",
    },
  };
  const response: any = { status: jest.fn().mockReturnThis(), send: jest.fn() };
  const repository: any = { save: jest.fn(), find: jest.fn(), delete: jest.fn() };
  const createGenially = new CreateGeniallyService(repository);

  beforeEach(() => {
    repository.save.mockClear();
  });

  it("should create a new genially on the persistence layer", async () => {
    await new CreateGeniallyController(createGenially).run(req, response);

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return http status created", async () => {
    await new CreateGeniallyController(createGenially).run(req, response);

    expect(response.status).toHaveBeenCalledWith(httpStatus.CREATED);
  });
});

describe("Create new genially invalid name", () => {});

describe("Create new genially invalid description", () => {});
