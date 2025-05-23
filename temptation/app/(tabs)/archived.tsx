import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function ArchivedScreen() {
  return (
    <>
        <Stack.Screen options={{ title: 'Archived' }} />
        <ThemedView style={styles.container}>
        <ThemedText type="title">This is the archived view.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
        </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});