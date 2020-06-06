import InMemoryGeniallyRepository from "../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import CreateGeniallyService from "../contexts/core/genially/application/CreateGeniallyService";
import CreateGeniallyController from "./controllers/CreateGeniallyController";
import RenameGeniallyService from "../contexts/core/genially/application/RenameGeniallyService";
import RenameGeniallyController from "./controllers/RenameGeniallyController";

//repos
const repo = new InMemoryGeniallyRepository();

//services
const createGeniallyService = new CreateGeniallyService(repo);
const renameGeniallyService = new RenameGeniallyService(repo);

//controllers
export const createGeniallyController = new CreateGeniallyController(createGeniallyService);
export const renameGeniallyController = new RenameGeniallyController(renameGeniallyService);
