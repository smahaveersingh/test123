import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ShiftTimingScreen from '../componenets/ShiftTimingScreen';
import TEST from '../componenets/LunchTime';
import WeekSelector from '../componenets/WeekSelector';
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

  const pressHandler = () => 
 {
   navigation.navigate('Lunch')
 }


    return (
            <View>
              <View >
              <TEST />
              </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
      backgroundColor: '#fff',
        },
        
      text:{
        alignItems: 'center',
        marginTop:20,
        justifyContent: 'center'
        },

    icons:{
        alignItems: 'center',
        color:'white',
        marginBottom:200,
        justifyContent: 'center'
        },

        text1:{
          alignItems: 'center',
          marginTop: -50,
          marginBottom: 75,
          justifyContent: 'center'
          },
  });
  

export default Home;
  