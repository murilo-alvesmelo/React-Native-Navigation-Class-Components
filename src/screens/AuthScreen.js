import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen!</Text>
        <Button
          title="Log out"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default AuthScreen;