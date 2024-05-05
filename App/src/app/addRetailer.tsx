

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import AddRetailerForm from '../components/AddRetailerForm';


export default function addRetailerScreen() {

    const handleRetailerSubmit: (retailer: string) => Promise<void> = async (retailer) => {
        try {
          console.log("Hello ", retailer)
        }catch(e){
          console.log(e)
        }
      }

      
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Retailer </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <AddRetailerForm  onSubmit={handleRetailerSubmit} />

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