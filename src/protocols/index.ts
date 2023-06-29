export type Movie = {
    id: number
    name: string
    genre: string
    platform: string
    status: boolean
}

export type CreateMovie = Omit<Movie, "id">;