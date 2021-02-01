import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const ScreenA = ({ navigation }) => {
 
   return (
        <View>
            <Text>Screen A</Text>
            <Button title="Navigate to Screen B" onPress={() => navigation.navigate('screenB')}></Button>
        </View>
    )
}

export default ScreenA;