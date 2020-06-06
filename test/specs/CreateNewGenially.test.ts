import httpStatus from "http-status";
import CreateGeniallyController from "../../src/api/controllers/CreateGeniallyController";
import CreateGeniallyService from "../../src/contexts/core/genially/application/CreateGeniallyService";

describe("Create new genially", () => {
  let req: any;
  const response: any = { status: jest.fn().mockReturnThis(), send: jest.fn(), json: jest.fn() };
  const repository: any = {
    save: jest.fn(),
    find: jest.fn(),
    delete: jest.fn(),
  };
  const createGenially = new CreateGeniallyService(repository);
  const createGeniallyController = new CreateGeniallyController(createGenially);

  beforeEach(() => {
    req = {
      body: {
        name: "name",
        description: "description",
      },
    };
   repository.save.mockClear();
  });

  it("should create a new genially on the persistence layer", async () => {
    await createGeniallyController.run(req, response);

    expect(repository.save).toHaveBeenCalled();
  });

  it("should return http status created", async () => {
    await createGeniallyController.run(req, response);

    expect(response.status).toHaveBeenCalledWith(httpStatus.CREATED);
  });

  describe("name must have a value with length from 3 to 20", () => {
    test.each([undefined, "na", "n".repeat(21)])(
      "create genially with name %s should return a bad request status",
      async name => {
        req = { body: {...req.body, name }};
        await createGeniallyController.run(req, response);

        expect(response.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST);
      }
    );
  });

  describe("Create new genially invalid description", () => {});
});
