import { View, Text, TextInput ,Button, Alert, StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    if(email === 'harshit.duggal' && password === 'Harshit'){
      navigation.navigate('Home');
    }
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.welcome}>
        <Text>Welcome To The Login Page</Text>
      </View>
      <View>
        <Text>User Email :</Text>
      </View>
      <View>
        <TextInput 
          placeholder="Email"
          onChangeText={newEmail => setEmail(newEmail)}
          defaultValue = {email}
        />
      </View>
      <View>
        <Text>Password :</Text>
      </View>
      <View>
        <TextInput 
          placeholder="Password"
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue = {password}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button onPress={() => {handleClick()}} title="Login"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 250,
    margin: 10
  },
  welcome : {
    alignItems: 'center'
  }
})

export default Login