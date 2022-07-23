export interface ICard {
    card: string
    isRoll: boolean
    index: number
    hanleRoll: (index: number) => void
    order: number
}