export class Menu implements IMenu {
    item!: string
    link!: string
}

export interface IMenu {
    item: string
    link: string
}