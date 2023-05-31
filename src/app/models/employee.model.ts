export class Employee implements IEmployee {
    id!: string
    name!: string
}

export interface IEmployee {
    id: string
    name: string
}