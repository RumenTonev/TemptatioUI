import { Image, StyleSheet, Platform, Pressable, ImageBackground, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, Card, Button, Icon } from '@rneui/themed';

const imageGrass = require('../../assets/images/Grass.png');
//const imageBallGrass = require('./BallGrass.png');
const imageBallGrass = require('../../assets/images/Ball.png');

export default function HomeScreen() {
  function realTimePressed() {
    alert("real time pressed!");
  }

  function archivedPressed() {
    alert('Archived pressed!');
  }

  return (
    <ThemedView style={styles.container}>
      <ImageBackground source={imageGrass} resizeMode="cover" style={styles.image}>
        <View style={styles.view}>
          <Pressable onPress={realTimePressed}>
            <Card containerStyle={styles.card}>
            <ImageBackground
              style={{minHeight: 200, borderWidth: 0}}
              source={imageBallGrass}>
                <Text style={styles.cardText}>RealTime</Text>
              </ImageBackground>
            </Card>
          </Pressable>
          <Pressable onPress={archivedPressed}>
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Archived</Card.Title>
                <Card.Image
                  style={{ padding: 0 }}
                  source={{
                    uri:
                      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                  }}
                />
            </Card>
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

{/* const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
*/}