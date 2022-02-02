import { StyleSheet, View } from 'react-native';
import Login_view from './src/components/Login_view';


export default function App() {
  return (
    <View style={styles.container}>
      <Login_view />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154a02',
    padding:40,
  },
});
