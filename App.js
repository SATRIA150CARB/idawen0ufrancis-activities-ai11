import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  
    
        <View style={styles.container}>
    
         <input id="output" type="text" name="output"/>
         <button onClick={alerta}>Button</button>
    
        </View>
      );
    }
    
    function alerta() {
        alert(document.getElementById("output").value);
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
