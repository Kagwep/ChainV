import { StyleSheet } from 'react-native';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import { W3mButton } from '@web3modal/wagmi-react-native';
import { ContractABI,ContractAddress } from '@/src/constants/utils';
import  AddManufacturerForm from '../../components/AdminVerify'
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/src/components/useColorScheme';
import Colors from '@/src/constants/Colors';
import AdminMenu from '@/src/components/AdminMenu';
import ManufucturerMenu from '@/src/components/ManufucturerMenu';
import RetailerMenu from '@/src/components/RetailerMenu';
import { ScrollView } from 'react-native';

export default function TabTwoScreen() {

  const {isConnected, address} = useAccount();
  const colorScheme = useColorScheme();



  const handleSubmit: (manufacturer: string) => Promise<void> = async (manufacturer) => {
    try {
      console.log("Hello ", manufacturer)
    }catch(e){
      console.log(e)
    }
  }

   

  return (

    <View style={styles.container}>
      <ScrollView>
      <View style={styles.web3}>
      <W3mButton balance='show'/> 
      </View>
      
      <View>
        {isConnected ? (

          
          <>
          <AdminMenu />
          <ManufucturerMenu />
          <RetailerMenu />
          </>

        ) : (
          <Text style={styles.userInfo}> Connect Wallet to proceed </Text>
        )}

      </View>
      </ScrollView>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  userInfo: {
     fontSize:18,
     padding:10,
     color:'orange'
  },
  owner: {

    textAlign:'center',
    padding:10,

  },
  containerAdmin:{
    display:'flex',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin:5,
  },
  linkbts:{
    

    
    

  },
  manageText:{

    color:'blue',
    paddingTop:5,

  },
  pressableView:{
    display:'flex',
    flexDirection:'row',
  },
  
  reportText:{

    color:'orange',
    paddingTop:5,

  },
  
  logsText:{

    color:'green',
    paddingTop:5,

  },
  adminView:{
    borderColor:'grey',
    borderWidth:1,
    borderRadius:10,
  },
  web3:{
    borderColor:'grey',
    borderWidth:1,
    borderRadius:10,
    marginBottom:10
  }
});
