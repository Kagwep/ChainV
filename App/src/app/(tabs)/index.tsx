import { StyleSheet,Image,Pressable } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import '../../../globals'
import { Link } from 'expo-router';

export default function TabOneScreen() {
  const { end, middle,start } = Colors.gradientColors;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[end, middle, start]}
        locations={[0, 0.5, 1]} // Control the location of gradient color stop
        style={styles.gradientContainer}
      >
      <Text style={styles.title}> Start Scanning</Text>
      <Text style={styles.helperTitle}>Place your camera over a QR code to begin</Text>
      
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source= {{uri: 'https://res.cloudinary.com/dydj8hnhz/image/upload/v1714876901/p1cqmitajf48ivxmcoyy.jpg'}} />
        <View style={[styles.cornerMarker, styles.topLeftCorner]} />
        <View style={[styles.cornerMarker, styles.topRightCorner]} />
        <View style={[styles.cornerMarker, styles.bottomLeftCorner]} />
        <View style={[styles.cornerMarker, styles.bottomRightCorner]} />
      </View>
        
      <Pressable style={[styles.scanButton,styles.button]}>
          <Link href="/scanItem" asChild>
          <Text style={styles.buttonTextScan}>Scan Now</Text>
          </Link>
      </Pressable>
    
        <Link href="/modal" asChild>
          <Pressable style={[styles.learnMoreButton,styles.button]}>
            <Text style={styles.buttonTextMore}>Learn More</Text>
          </Pressable>
        </Link>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:"center",
    borderRadius:10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#163257',
    padding:10,
  },
  helperTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#367BD5',
    padding:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageStyle:{
    width:'100%',
    aspectRatio:1
  },
  gradientContainer: {
    width: '100%', // Full width of the parent container minus padding
    height:'100%',
    padding: 15, // Padding inside the gradient container
    borderRadius: 10, // Optional: if you want rounded corners
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    minHeight: 200, // Set a minimum height for visibility
  },
  imageContainer: {
    width: '80%',
    aspectRatio:1,
    borderWidth: 2,
    borderColor: '#2f95dc', // Stylish blue border color
    padding:10,
    marginBottom:10,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur
    elevation: 5, // For Android shadow effect
  },
  cornerMarker: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#2f95dc'
  },
  topLeftCorner: {
    borderTopWidth: 4,
    borderLeftWidth: 4,
    top: 0,
    left: 0
  },
  topRightCorner: {
    borderTopWidth: 4,
    borderRightWidth: 4,
    top: 0,
    right: 0
  },
  bottomLeftCorner: {
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    bottom: 0,
    left: 0
  },
  bottomRightCorner: {
    borderBottomWidth: 4,
    borderRightWidth: 4,
    bottom: 0,
    right: 0
  },
  scanButton: {
    backgroundColor: '#ffffff', // White background for the Scan Now button
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: '#125570', // Gradient blue background for the Learn More button
  },
  buttonTextMore: {
    fontSize: 18,
    color: '#fff', // White text color for visibility
    textAlign: 'center',
  },
  buttonTextScan: {
    fontSize: 18,
    color: '#072D3C', // White text color for visibility
    textAlign: 'center',
  },
  button: {
    
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10, // Space between buttons
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur
    elevation: 5, // For Android shadow effect
    
  },
});
