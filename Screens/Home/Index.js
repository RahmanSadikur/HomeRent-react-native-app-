import React from 'react';
import { ImageBackground,View, Text, StyleSheet,Button,Image } from 'react-native';
import {Asset} from 'expo-asset';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const HomeScreen = ({ navigation }) => {
  const imageURI = Asset.fromModule(require('./../../assets/islamic.png')).uri;
  return (
    <View style={styles.container}>
     
     {/* <Image
        style={{  flex: 1,alignSelf: 'stretch', }}
          source={{uri: imageURI}} 
          resizeMode='contain'
         />   */}
     
       <ImageBackground source={{uri: imageURI}}  resizeMode='stretch' style={{    flex: 1, justifyContent: "center",alignSelf: 'stretch', }}>
      <Text style={{  justifyContent: "center",alignSelf:"center",color:"white",fontWeight: 'bold'}}>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
     </ImageBackground>
    </View>
  );
};
 
export default HomeScreen;