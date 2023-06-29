import { Router } from "express";
import * as moviesController from "../controllers/movies-controller"
import { validateSchemaMiddleware } from "../middlewares/validation-middleware";
import movieSchema from "../schemas/movies-schema";

const movieRouter = Router()

movieRouter.get("/movies", moviesController.getMovies)
movieRouter.post("/movies", validateSchemaMiddleware(movieSchema), moviesController.createMovie)
movieRouter.post("/watchedMovie/:id", moviesController.watchedMovie)
movieRouter.delete("/movies/:id", moviesController.deleteMovie)

export default movieRouter