import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


function LoginClienteScreen():JSX.Element {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    

    function login(){
        const dados = {
            email: email,
            password: password
        }

        console.log(dados);
    }

     return (
       
        <View style={styles.container}>
            <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/images/user.png')}
            />
            

            <View style={styles.card}>
                <Text style={styles.title}>Login Cliente</Text>
                <TextInput 
                 style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#151413"
                onChangeText={(textNome) => setNome(textNome)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#151413"
                onChangeText={(textEmail) => setEmail(textEmail)}
                />

                <TextInput 
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#151413"
                onChangeText={(textPassword) => setPassword(textPassword)}
                secureTextEntry
                />
                
                <TouchableOpacity 
                style={styles.button}
                 onPress={() =>{login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

               <TouchableOpacity>
                <Text style={styles.forgotPassword}>Não possui conta? Cadastre-se!</Text>
               </TouchableOpacity>

               <TouchableOpacity >
                <Text style={styles.forgotPassword}>Esqueceu a senha</Text>
               </TouchableOpacity>


            </View>
            <Image
            style={styles.logoinsta}
            resizeMode="contain"
            source={require('../assets/images/insta.webp')}/>


        </View>
        
         
     );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#C71585'
    },

    logo: {
      width: 80,
      height: 80,
      marginBottom: 40,
      marginTop: -100
    },
    card: {
        backgroundColor: "#FFFFFF",
        width: 300,
        borderRadius: 30,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0,3)',
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },

    logoinsta: {
        width: 70,
        height: 70,
        marginBottom: 0,
        marginTop: 10,
        alignItems:'center'
        
        
        
      },


    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: "black",
        marginBottom: 20,
        textAlign: 'center',

    },
    input: {
     backgroundColor: "#D7D4D1",
     height: 35,
     marginBottom: 15,
     paddingHorizontal: 10,
     borderRadius: 8,
     borderWidth: 1,
     borderColor: '#000000'
    },
    button:{
        backgroundColor: 'black',
        height: 30,
        borderRadius: 8,

        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000',
        
        
    },
    forgotPassword: {
      color: 'black',
      textAlign: 'center',
      marginTop: 5,
    },


});

export default LoginClienteScreen;