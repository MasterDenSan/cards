export interface ILeader {
    id: number
    name: string
    time: string
}

export interface ILeadersTable {
    leaders: ILeader[]
}