

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import MarkItemSoldForm from '../components/MarkItemSoldForm';


export default function MarkItemSoldScreen() {

    const handleMarkItemSoldSubmit: (productId: string) => Promise<void> = async (productId) => {
        try {
          console.log("Hello ", productId)
        }catch(e){
          console.log(e)
        }
      }

      
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sold </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <MarkItemSoldForm  onSubmit={handleMarkItemSoldSubmit} />

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