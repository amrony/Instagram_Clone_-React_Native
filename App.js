import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <View style={{ padding: 0 }}>
          <HomeScreen />
      </View>
    )
  }
}

export default App;
