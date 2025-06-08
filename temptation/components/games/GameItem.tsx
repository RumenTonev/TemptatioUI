import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { GameData } from '../types/pushTypes';


interface GameItemProps {
  game: GameData;
}

export default function GameItem({ game }: GameItemProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (game.GameStatus !== 1) {
      setExpanded(!expanded);
    }
  };

  return (
    <TouchableOpacity onPress={toggleExpand} style={styles.container} activeOpacity={0.8}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.hostName}>{game.HostName}</Text>
        <Text style={styles.status}>Status: {game.GameStatus}</Text>
        <Text style={styles.guestName}>{game.GuestName}</Text>
      </View>

      {/* Expand players only if status !== 1 and expanded */}
      {game.GameStatus !== 1 && expanded && (
        <View style={styles.playersContainer}>
          <Text style={styles.sectionTitle}>Missing Players</Text>
          <FlatList
            data={game.MissingPlayers}
            keyExtractor={(item) => item.Id}
            renderItem={({ item }) => (
              <Text style={styles.playerRow}>
                {item.PlayerName} ({item.Position})
              </Text>
            )}
          />
          <Text style={styles.sectionTitle}>Influental Rezerve Players</Text>
          <FlatList
            data={game.InfluentalRezervePlayers}
            keyExtractor={(item) => item.Id}
            renderItem={({ item }) => (
              <Text style={styles.playerRow}>
                {item.PlayerName} ({item.Position})
              </Text>
            )}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hostName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  status: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  guestName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
  },
  playersContainer: {
    marginTop: 12,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  playerRow: {
    fontSize: 13,
    paddingVertical: 2,
  },
});
