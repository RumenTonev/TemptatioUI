interface Player {
  Id: string;
  PlayerName: string;
  Position: string;
}

export interface GameData {
  GameStatus: number;
  HasNewEvent: boolean;
  GameId: string;
  HostName:string;
  GuestName:string;
  Time: string;
  Result: string;
  CheckTeamList: boolean;
  MissingPlayers: Player[];
  InfluentalRezervePlayers: Player[];
}
