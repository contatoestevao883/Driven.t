import { connection } from "../database/database-connection";
import { CreateMovie, Movie } from "protocols";

async function createMovie(movie: CreateMovie) {

    return await connection.query<CreateMovie>

    (`
      INSERT INTO movies (name, genre, platform) VALUES ($1, $2, $3)`,
                [movie.name, movie.genre, movie.platform]
    );
}


async function getMovies() {

    const result = await connection.query<Movie>
    (
      `SELECT * FROM movies`, 
                        
    )
    
    return result.rows
}

async function watchedMovie(id) {
  await connection.query
  (
    `UPDATE movies SET status=true WHERE id=$1`,
              [id]
  )
}

async function deleteMovie(id) {
  await connection.query
  (
    `DELETE FROM movies WHERE id=$1`,
              [id]
  )
}

const movieRepository = {
    createMovie,
    getMovies,
    watchedMovie,
    deleteMovie
}

export default movieRepository