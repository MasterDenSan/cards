export interface ICard {
    card: string
    isRoll: boolean
    index: number
    // eslint-disable-next-line no-unused-vars
    hanleRoll: (index: number) => void
    order: number
}