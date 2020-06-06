import InMemoryGeniallyRepository from "../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import CreateGeniallyService from "../contexts/core/genially/application/CreateGeniallyService";
import CreateGeniallyController from "./controllers/CreateGeniallyController";
import RenameGeniallyService from "../contexts/core/genially/application/RenameGeniallyService";
import RenameGeniallyController from "./controllers/RenameGeniallyController";
import DeleteGeniallyService from "../contexts/core/genially/application/DeleteGeniallyService";
import DeleteGeniallyController from "./controllers/DeleteGeniallyController";

//repos
const repo = new InMemoryGeniallyRepository();

//services
const createGeniallyService = new CreateGeniallyService(repo);
const renameGeniallyService = new RenameGeniallyService(repo);
const deleteGeniallyService = new DeleteGeniallyService(repo);

//controllers
export const createGeniallyController = new CreateGeniallyController(createGeniallyService);
export const renameGeniallyController = new RenameGeniallyController(renameGeniallyService);
export const deleteGeniallyController = new DeleteGeniallyController(deleteGeniallyService);
