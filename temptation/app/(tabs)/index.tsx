import { StyleSheet, Platform, Pressable, ImageBackground, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { Text } from '@rneui/themed';
import { useRouter } from 'expo-router';

const imageGrass = require('../../assets/images/Grass.png');
const imageBallGrass = require('../../assets/images/Ball.png');
const archivedImg = require('../../assets/images/react-logo.png');

export default function HomeScreen() {
  const router = useRouter();

  function realTimePressed() {
    router.navigate("/realTime");
  }

  function archivedPressed() {
    router.navigate("/archived");
  }

  return (
    <ThemedView style={styles.container}>
      <ImageBackground source={imageGrass} resizeMode="cover" style={styles.image}>
        <View style={styles.view}>
          <Pressable onPress={realTimePressed}>
            <ImageBackground
              style={{minHeight: 200, borderWidth: 0, paddingTop: 100}}
              source={imageBallGrass}>
              <Text style={styles.cardText}>RealTime</Text>
            </ImageBackground>
          </Pressable>
          <Pressable onPress={archivedPressed}>
            <ImageBackground
                style={{minHeight: 200, borderWidth: 0, paddingTop: 100}}
                source={archivedImg}>
                <Text style={styles.cardText}>Archived</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </ImageBackground>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    paddingTop: 50,
  },
  card: {
    backgroundColor: 'green',
    borderWidth: 0,
    minHeight: 200,
  },
  cardTitle: {
    fontFamily: 'Papyrus',
    fontWeight: 'bold',
    fontSize: 22,
    color: 'yellow',
  },
  cardText: {
    padding: 100,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'yellow'
  },
});
