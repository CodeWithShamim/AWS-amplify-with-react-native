import React from 'react';
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddProductScreen from './src/screens/AddProductScreen';
import HomeScreen from './src/screens/HomeScreen';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';

const App=() => {
  const Stack=createStackNavigator();

  const SumbitSignOut=() => {
    Auth.signOut();
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => navigation.navigate('AddProduct')}>
                  <Icon name={'pluscircle'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button
                    icon={<Icon name="logout" size={25} color="#000000" />}
                    onPress={SumbitSignOut}
                    type="clear"
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="AddProduct"
            buttonStyle={styles.addButton}
            component={AddProductScreen}
            options={{
              title: 'Add Product',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles=StyleSheet.create({
  addButton: {
    marginRight: 20,
  },
  logOutBtn: {
    marginLeft: 10,
  },
});

export default withAuthenticator(App);