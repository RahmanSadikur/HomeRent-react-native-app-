import React from 'react';

import { View, Text, StyleSheet,Button,Image,ImageBackground, } from 'react-native';


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const AboutScreen = ({ navigation }) => {
 
  return (
     
    <View style={styles.container}>
     
     <ImageBackground source={require('./islamic.png')} resizeMode='stretch' style={{    flex: 1, justifyContent: "center",alignSelf: 'stretch', }}>
     <Text style={{  justifyContent: 'flex-start',alignSelf:"center",color:"white",fontWeight: 'bold'}}>About</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
     </ImageBackground>
    </View>
  );
};
 
export default AboutScreen;