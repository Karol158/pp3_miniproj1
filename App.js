import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

   function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

   
      <View style={{ marginVertical: 20 }}>
        <Avatar
          size={100}
          rounded
          icon={{ name: "user", type: "font-awesome"}}
          containerStyle={{ backgroundColor: "#0000FF" }}
        />
      </View>

      <Text style={{color: '#000000', fontWeight: 'bold',  marginLeft: -300}}>
        Login
      </Text>
      <Input
      placeholder=''
      />

      <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: -300}}>
        Senha
      </Text>
      <Input placeholder="" secureTextEntry={true}/>

      <Button title='Logar' onPress={() => navigation.navigate('Listacontatos')}>
      </Button>
            <Button
              title="Cadastrar"
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{ backgroundColor: '#00c0a3', borderRadius:10,}}
            />
      <Text style={{marginTop:10,color: '#000000' }}>Esqueceu a senha</Text>
    </View>
    


  );
}












 function Cadastro() {
  return (
    <View style={styles1.container1}>
      <StatusBar style="auto" />

      <View style={styles1.fakeHeader}>
      <Text style={styles1.fakeHeaderText}>Cadastro</Text>
      </View>

      <Text style={{color: '#000000', fontWeight: 'bold',  marginLeft: -300}}>
        Nome
      </Text>
      <Input placeholder="" />

      <Text style={{color: '#000000', fontWeight: 'bold',  marginLeft: -300}}>
        Email
      </Text>
      <Input placeholder="" />

      <Text style={{color: '#000000', fontWeight: 'bold',  marginLeft: -300}}>
        Senha
      </Text>
      <Input placeholder="" secureTextEntry={true} />

            <Button
              title="Cadastrar"
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{ backgroundColor: '#00c0a3', borderRadius:10,}}
            />
    </View>
  );
}

const styles1 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  fakeHeader: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  fakeHeaderText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
});







 function Esqueceu() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.fakeHeader}>
        <Text style={styles.fakeHeaderText}>Esqueceu a Senha</Text>
      </View>

      <Text style={{ color: '#000000', fontWeight: 'bold', marginLeft: -300 }}>
        Email
      </Text>
      <Input
        placeholder=""
        keyboardType="email-address"
      />

      <Button
        title="Enviar"
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
        buttonStyle={{ backgroundColor: '#00c0a3', borderRadius: 10 }}
      />
    </View>
  );
}

function ListacontatosScreen() {
  return (
    <View style={styles.container}>
      <Text> Lista de Contatos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  fakeHeader: {
    width: '100%',
    backgroundColor: '#d3d3d3', 
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  fakeHeaderText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
});


const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Listacontatos" component={ListacontatosScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;
