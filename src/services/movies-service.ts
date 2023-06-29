import { CreateMovie, Movie } from "protocols"
import movieRepository from "../repositories/movies-repository"

async function createMovie(movie: CreateMovie) {
    return await movieRepository.createMovie(movie)
}

async function getMovies() {
    return await movieRepository.getMovies()
}

async function watchedMovie(id) {
    return await movieRepository.watchedMovie(id)
}

async function deleteMovie(id) {
    return await movieRepository.deleteMovie(id)
}

const movieService = {
    createMovie,
    getMovies,
    watchedMovie,
    deleteMovie
}

export default movieService