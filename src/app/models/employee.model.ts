export class Employee implements IEmployee {
    IDcard!: number
    name!: string
    DOB!: Date
    phone!: number
    address!: string
}

export interface IEmployee {
    IDcard: number
    name: string
    DOB: Date
    phone: number
    address: string
}