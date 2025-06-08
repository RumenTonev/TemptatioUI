// gameSlice.ts
//import { GameData } from '@/components/types/pushTypes';
import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { GameData } from '../../components/types/pushTypes';

const gameAdapter = createEntityAdapter<GameData>({
  selectId: (game) => game.GameId, // Use GameId as the entity ID
});

// --- Initial Data ---
const initialGames: GameData[] = [
  {
    GameId: '50200',
    GameStatus: 1,
    HasNewEvent: false,
    Time: '0',
    Result: '0/0',
    CheckTeamList: false,
    MissingPlayers: [],
    InfluentalRezervePlayers: [],
    HostName:'Manchester United',
    GuestName:'Manchester City'
  },
  {
    GameId: '50201',
    GameStatus: 1,
    HasNewEvent: false,
    Time: '0',
    Result: '0/0',
    CheckTeamList: false,
    MissingPlayers: [],
    InfluentalRezervePlayers: [],

    HostName:'Manchester United',
    GuestName:'Coventry City'
  },
  {
    GameId: '50202',
    GameStatus: 1,
    HasNewEvent: false,
    Time: '0',
    Result: '0/0',
    CheckTeamList: false,
    MissingPlayers: [],
    InfluentalRezervePlayers: [],
    HostName:'Newcastle United',
    GuestName:'Manchester City'
  },
];

// --- Initial State ---
const initialState = gameAdapter.addMany(
  gameAdapter.getInitialState(),
  initialGames
);

// --- Slice ---
const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    upsertGame: (state, action: PayloadAction<GameData>) => {
      gameAdapter.upsertOne(state, action.payload);
    },
    updateGamePartial: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<GameData> }>
    ) => {
      gameAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload.changes,
      });
    },
    removeGame: (state, action: PayloadAction<string>) => {
      gameAdapter.removeOne(state, action.payload);
    },
  },
});

// --- Exports ---
export const { upsertGame, updateGamePartial, removeGame } = gameSlice.actions;
export default gameSlice.reducer;

export const {
  selectById: selectGameById,
  selectAll: selectAllGames,
  selectEntities: selectGameEntities,
  selectIds: selectGameIds,
} = gameAdapter.getSelectors(
  (state: { games: ReturnType<typeof gameSlice.reducer> }) => state.games
);