 export interface ICards {
    id: number
    name: string
}

export interface IGameTable {
    cards: ICards[]
    onEndGame: () => void
    onAddLeaderActionCreator: (name: string) => void
    className?: string
}