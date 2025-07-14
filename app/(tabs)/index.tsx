import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is Brian Vu</Text>
      <Link href="/about" style={styles.button}>
      About us
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{ 
    flex: 1,
    backgroundColor: '#E4CC37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color : '#272D2D',
  },
  button: {
    fontSize: 30,
    textDecorationLine: 'underline',
    color: '#272D2D',
  }
});
