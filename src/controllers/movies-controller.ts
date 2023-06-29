import { Request, Response, query } from "express";
import httpStatus from "http-status";
import { Movie } from "protocols";
import movieService from "../services/movies-service";

export function createMovie(req: Request, res: Response): void {
    const movie = req.body as Movie;
    movieService.createMovie(movie);
    res.sendStatus(httpStatus.CREATED);
}

export async function getMovies(req: Request, res: Response) {
    const movies = await movieService.getMovies()
    res.send(movies)
}

export async function watchedMovie(req: Request, res: Response) {
    const id: string = req.params.id

    await movieService.watchedMovie(id)
    res.sendStatus(httpStatus.OK)
}

export async function deleteMovie(req: Request, res: Response) {
    const id: string = req.params.id

    await movieService.deleteMovie(id)
    res.sendStatus(httpStatus.OK)
}

