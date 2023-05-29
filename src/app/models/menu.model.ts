export class Menu implements IMenu {
    item!: string
    link?: Function
}

export interface IMenu {
    item: string
    link?: Function
}