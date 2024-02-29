import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


function CadastroProfissionalScreen():JSX.Element {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");
    const [password, setPassword] = useState("");
    const [salario, setSalario] = useState("");


    function login(){
        const dados = {
            nome: nome,
            email: email,
            celular: celular,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password,
            salario: salario
        } 

        console.log(dados);
    }

     return (
       <ScrollView style = {{height: '100%', width: 'auto'}}>
        <View style={styles.container}>
        <Image
            style={{...styles.logo, marginTop:20}}
            resizeMode="contain"
            source={require('../assets/images/user.png')}
            />
            

            <View style={styles.card}>
                <Text style={styles.title}>Cadastro Profissional</Text>
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
                placeholder="Celular"
                placeholderTextColor="#151413"
                onChangeText={(textCelular) => setCelular(textCelular)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#151413"
                onChangeText={(textCpf) => setCpf(textCpf)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Data de Nascimento"
                placeholderTextColor="#151413"
                onChangeText={(textDataNascimento) => setDataNascimento(textDataNascimento)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Cidade"
                placeholderTextColor="#151413"
                onChangeText={(textCidade) => setCidade(textCidade)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Estado"
                placeholderTextColor="#151413"
                onChangeText={(textEstado) => setEstado(textEstado)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="País"
                placeholderTextColor="#151413"
                onChangeText={(textPais) => setPais(textPais)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Rua"
                placeholderTextColor="#151413"
                onChangeText={(textRua) => setRua(textRua)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Numero"
                placeholderTextColor="#151413"
                onChangeText={(textNumero) => setNumero(textNumero)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Bairro"
                placeholderTextColor="#151413"
                onChangeText={(textBairro) => setBairro(textBairro)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="CEP"
                placeholderTextColor="#151413"
                onChangeText={(textCep) => setCep(textCep)}
                />
                <TextInput 
                 style={styles.input}
                placeholder="Complemento"
                placeholderTextColor="#151413"
                onChangeText={(textComplemento) => setComplemento(textComplemento)}
                />
                <TextInput 
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#151413"
                onChangeText={(textPassword) => setPassword(textPassword)}
                secureTextEntry
                />
                <TextInput 
                style={styles.input}
                placeholder="Salario"
                placeholderTextColor="#151413"
                onChangeText={(textSalario) => setSalario(textSalario)}
                secureTextEntry
                />
                
                <TouchableOpacity 
                style={styles.button}
                 onPress={() =>{login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>


            </View>


        </View>
        </ScrollView>
         
     );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#A020F0'
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

export default CadastroProfissionalScreen;