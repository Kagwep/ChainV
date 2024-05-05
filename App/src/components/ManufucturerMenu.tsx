import { StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/src/components/useColorScheme';
import Colors from '@/src/constants/Colors';



const ManufucturerMenu = () => {

    const colorScheme = useColorScheme();



    const handleSubmit: (manufacturer: string) => Promise<void> = async (manufacturer) => {
      try {
        console.log("Hello ", manufacturer)
      }catch(e){
        console.log(e)
      }
    }
  

    return (

  
        <View style={styles.adminView}>
  
           <Text style={styles.owner}> Manufucturer </Text>
  
            <View style={styles.containerAdmin}>
  
            <Link href="/addRetailer" asChild>
                <Pressable style={styles.linkbts}>
                  <View style={[styles.pressableView,{backgroundColor: `${Colors[colorScheme ?? 'light']}`}]}>
                 
                    <FontAwesome
                      name="users"
                      size={20}
                      color='blue'
                      style={{ marginRight: 15}}
                    />
                
                  <Text style={styles.manageText}> Add Retailer </Text>
                  </View>
  
                </Pressable>
              </Link>
  
            </View>
  
            <View style={styles.containerAdmin}>
  
            <Link href="/addItem" asChild>
                <Pressable style={styles.linkbts}>
                  <View style={[styles.pressableView,{backgroundColor: `${Colors[colorScheme ?? 'light']}`}]}>
                 
                    <FontAwesome
                      name="sitemap"
                      size={20}
                      color='orange'
                      style={{ marginRight: 15}}
                    />
                
                  <Text style={styles.reportText}> Add Item</Text>
                  </View>
  
                </Pressable>
              </Link>
  
            </View>
  
            <View style={styles.containerAdmin}>
  
            <Link href="/deleteItem" asChild>
                <Pressable style={styles.linkbts}>
                  <View style={[styles.pressableView,{backgroundColor: `${Colors[colorScheme ?? 'light']}`}]}>
                 
                    <FontAwesome
                      name="trash"
                      size={20}
                      color='green'
                      style={{ marginRight: 15}}
                    />
                
                  <Text style={styles.logsText}> Delete Item</Text>
                  </View>
  
                </Pressable>
              </Link>
  
            </View>
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
  


export default ManufucturerMenu;