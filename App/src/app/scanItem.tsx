import React,{ useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Platform, StyleSheet,Button } from 'react-native';
import { Stack } from 'expo-router';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import { CameraView, Camera } from "expo-camera/next";


export default function ScanScreen() {

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);


    useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const isGranted = status === "granted";
      if (isGranted){
      setHasPermission(isGranted);
      } 
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data } :{ type:any , data:any}) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
