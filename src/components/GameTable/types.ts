 export interface ICards {
    id: number
    name: string
}

export interface IGameTable {
    cards: ICards[]
    onEndGame: () => void
    // eslint-disable-next-line no-unused-vars
    onAddLeaderActionCreator: (name: string) => void
    className?: string
}