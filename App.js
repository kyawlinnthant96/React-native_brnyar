import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Styles';

const App = () => {
  const name = '01-Blue Behind Green Bloches';

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} />
      <Text style={styles.title}>
        <Text style={styles.subtitle}>Playing:</Text>
        {name}
      </Text>
    </View>
  );
};

export default App;
