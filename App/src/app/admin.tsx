import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import  AddManufacturerForm from '../components/AdminVerify'

export default function adminScreen() {

    const handleSubmit: (manufacturer: string) => Promise<void> = async (manufacturer) => {
        try {
          console.log("Hello ", manufacturer)
        }catch(e){
          console.log(e)
        }
      }

      
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Manage users </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <AddManufacturerForm  onSubmit={handleSubmit} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});