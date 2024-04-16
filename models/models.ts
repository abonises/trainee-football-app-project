export type DataTeams = Data[]

export type Data = {
    team: Team
    coach: Coach
    startXI: PlayersArray[];
    formation: string
}

export type Team = {
    id: number,
    name: string,
    logo: string,
    color: null
}

export type Coach = {
    id: number,
    name: string,
    photo: string
}

export type PlayersArray = {
    player: Player;
}

type Player = {
    "id": number
    "name": string
    "number": number
    "pos": string
    "grid": string
}