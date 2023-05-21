import { Genre } from "./genre.model"

export class Movie implements IMovie {
    id!: number
    name!: string
    rating!: string
    releaseDate!: Date
    runtime!: string
    genre!: Genre[]
    anecdote!: string
}

export interface IMovie {
    id: number
    name: string
    rating: string
    releaseDate: Date
    runtime: string
    genre: Genre[]
    anecdote: string
}