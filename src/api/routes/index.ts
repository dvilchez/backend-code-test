import { Express } from "express";
import glob from "glob";

function register(routePath: string, app: Express) {
  const route = require(routePath); // eslint-disable-line @typescript-eslint/no-var-requires
  route.register(app);
}

export function registerRoutes(app: Express) {
  const routes = glob.sync(__dirname + "/**/*.route.*");
  routes.map((route) => register(route, app));
}
