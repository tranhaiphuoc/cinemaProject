import { Genre } from "./genre.model"

export class Movie implements IMovie {
    id!: number
    name!: string
    rating!: string
    releaseDate!: Date
    runtime!: number
    genre!: Genre[]
    anecdote!: string
    status!: number
    urlImage!: string
    urlTrailer!: string
}

export interface IMovie {
    id: number
    name: string
    rating: string
    releaseDate: Date
    runtime: number
    genre: Genre[]
    anecdote: string
    status: number
    urlImage: string
    urlTrailer: string
}