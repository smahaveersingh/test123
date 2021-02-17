import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import WeekSelector from 'react-native-week-selector';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.section}>
          <Text style={styles.text}>Week Ending</Text>
          
          <WeekSelector
            dateContainerStyle={styles.date}
            whitelistRange={[new Date(2018, 7, 13), new Date()]}
          />
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  section: {
    height: 100,
    marginBottom: 30,
    backgroundColor: '#e8dddc',
  },
  date: {
    flex: 1,
    fontWeight: 'bold',
  },
  text: {
    paddingLeft: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
});
