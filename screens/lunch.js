import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import CheckBox from '../componenets/checkBox';
import LunchTime from '../componenets/LunchTime';
import CDPickerComponent from '../componenets/CDPickerComponent';

export default function Lunch ({ navigation }) {

   return (
    <View style={styles.container}>
      <LunchTime />
        <CDPickerComponent />
      <CheckBox/>
    <View style={styles.accept}>
      <Button title="Accept" color="#0E6DE8" />
    </View>

    <View style={styles.cancel}>
      <Button title="Cancel" color="#FF0000"/>
    </View>

  </View>
);
}


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
      marginTop:4,
      height: 20, 
  },

      accept: {
        marginLeft:180,
        marginTop:-24,
        height: 20, 
        width: 130
    },

      cancel: {
        marginLeft:-180,
        marginTop:-20,
        height: 50, 
        width: 130
    },
      
  });
  