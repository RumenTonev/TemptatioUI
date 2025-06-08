// hooks/useAblyGameUpdates.ts
import { useEffect } from 'react';
import Ably from 'ably';
import { useDispatch } from 'react-redux';
import { GameData } from '../components/types/pushTypes';
import { upsertGame } from '../store/games/gameSlice';
//import { upsertGame, GameData } from '@/features/game/gameSlice';

export function useAblyGameUpdates(userId: string) {
  const dispatch = useDispatch();

  useEffect(() => {
    const ably = new Ably.Realtime({ key: 'nFeqhw.W3bzsA:v_A7tt8bi75yBaP0t7Y9hTGd0nTFFALGGpK7srLj2ok' });
    const channel = ably.channels.get(`notifications:${userId}`);

    channel.subscribe('notification', (msg) => {
      const game: GameData = msg.data;
      dispatch(upsertGame(game));
    });

    return () => {
      channel.unsubscribe();
      ably.close();
    };
  }, [dispatch, userId]);
}
