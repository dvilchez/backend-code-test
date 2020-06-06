import InMemoryGeniallyRepository from "../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import CreateGeniallyService from "../contexts/core/genially/application/CreateGeniallyService";
import CreateGeniallyController from "./controllers/CreateGeniallyController";

//repos
const repo = new InMemoryGeniallyRepository();

//services
const createGeniallyService = new CreateGeniallyService(repo);

//controllers
export const createGeniallyController = new CreateGeniallyController(createGeniallyService);
