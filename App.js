import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
        <stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return(
        
    <View style={styles.container}>
      <Image style={styles.imagee} source={require("./assets/z.png")} />       
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>props.navigation.navigate('Home')}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerBtn} onPress={()=>props.navigation.navigate('Register')}>
        <Text style={styles.registerText}>SIGN UP</Text> 
      </TouchableOpacity>
      <Text style={styles.Tex}>OR</Text>
      <View style={styles.imv} >
            <TouchableOpacity>
              <Image source={require('./assets/g.png')} style={styles.im} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/f.png')} style={styles.im} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/l.png')} style={styles.im} />
            </TouchableOpacity>
          </View>   
    </View> 
  )
}

const Register = (propsRregister) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return(
        
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/z.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(name) => setName(name)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 

      <TouchableOpacity style={styles.loginBtn} onPress={()=>propsRregister.navigation.navigate('Home')}>
        <Text style={styles.loginText} >LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity onPress={()=>propsRregister.navigation.navigate('Login')}>
      <Text style={styles.back}>already have an account?   <Text style={styles.tt}>SIGN IN</Text></Text> 
      </TouchableOpacity>
    </View>
  )
  
}

const Home = () =>{
  return( 
    <View style={styles.container}>
    <Text>Hello World</Text> 
    <StatusBar style="auto" />

  </View>
  )
  
}

const styles = StyleSheet.create({
  imagee:{
    marginTop:40,
    height: 200,
    width: 200,
    marginBottom: 70,
  },
  titleStyle: {
    color:"white",
    fontSize: 20,
    fontWeight: '800',
  },
  categoryStyle: {
    color:"white",
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  back:{
    marginTop:40
  },
  tt:{
    color:"#FAB562"
  },
  Tex:{
    marginTop:25,
    fontSize:20
  },
  imv:{
    marginTop:25,
    flexDirection:"row"
  },
  im:{
    width:50,
    height:50
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FAB562",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "left",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#E34C13",
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#E34C13",
  },
  loginText: {
    color: "white",
  },
  registerText: {
    color: "white",
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 70,
  },
});
