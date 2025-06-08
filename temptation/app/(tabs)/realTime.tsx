import { useSelector } from 'react-redux';
import { Link, Stack } from 'expo-router';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet } from 'react-native';
import { useAblyGameUpdates } from '../../hooks/useAblyGamesUpdate';
import { selectAllGames } from '../../store/games/gameSlice';
import { ThemedText } from '../../components/ThemedText';
import GameItem from '../../components/games/GameItem';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';

export default function RealTimeScreen() {
  useAblyGameUpdates('user123'); // Listens and updates Redux

  const games = useSelector(selectAllGames);

  return (
    <>
      <Stack.Screen options={{ title: 'Live Games' }} />
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>⚽ Live Games</ThemedText>

        <FlatList
          data={games}
          keyExtractor={(item) => item.GameId}
          renderItem={({ item }) => <GameItem game={item} />}
          contentContainerStyle={styles.listContent}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          windowSize={10}
        />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 80,
  },
});
