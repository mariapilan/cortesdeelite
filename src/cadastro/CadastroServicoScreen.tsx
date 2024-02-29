import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


function CadastroServicoScreen():JSX.Element {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [duracao, setDuracao] = useState("");
    const [preco, setPreco] = useState("");
    
    

    function login(){
        const dados = {
            nome: nome,
            descricao: descricao,
            duracao: duracao,
            preco: preco,
            
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
                <Text style={styles.title}>Cadastro de Serviço</Text>
                <TextInput 
                 style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#151413"
                onChangeText={(textNome) => setNome(textNome)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Descrição"
                placeholderTextColor="#151413"
                onChangeText={(textDescricao) => setDescricao(textDescricao)}
                />

                <TextInput 
                 style={styles.input}
                placeholder="Duração"
                placeholderTextColor="#151413"
                onChangeText={(textDuracao) => setDuracao(textDuracao)}
                />

                <TextInput 
                 style={styles.input}
                placeholder="Data de Nascimento"
                placeholderTextColor="#151413"
                onChangeText={(textPreco) => setPreco(textPreco)}
                />

            
                
                <TouchableOpacity 
                style={styles.button}
                 onPress={() =>{login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
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
        backgroundColor:'pink'
    },

    logo: {
      width: 80,
      height: 80,
      marginBottom: 40,
      marginTop: -100
    },
    card: {
        backgroundColor: "black",
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
        color: "white",
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
     borderColor: 'pink'
    },
    button:{
        backgroundColor: 'white',
        height: 30,
        borderRadius: 8,

        
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000',
        
        
    },
    forgotPassword: {
      color: 'white',
      textAlign: 'center',
      marginTop: 5,
    },


});

export default CadastroServicoScreen;