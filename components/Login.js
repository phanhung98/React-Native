import React, {Component} from 'react'
import{
    View, Text, TextInput, StyleSheet, TouchableOpacity, Alert
} from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.logo}>
                    Login App
                </Text>

                <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                placeholder= 'Email...'
                placeholderTextColor='#003f5c'
                keyboardType= 'email-address'
                onChangeText={text => this.setState({email:text})}>

                </TextInput>
                </View>

                <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                 placeholder= 'Password...'
                 placeholderTextColor='#003f5c'
                 secureTextEntry= {true}
                 onChangeText={text => this.setState({password:text})}>

                </TextInput>
                </View>
            <TouchableOpacity>
            <Text style={styles.fogot}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.loginBtn}
                                    onPress={() => {
                                       if((this.state.email) == 'admin' && (this.state.password) == '123456'){
                                           Alert.alert('Login successful!')
                                            
                                       }else{
                                           Alert.alert('Email or Password was wrong!')
                                       }
                                    }}>
                    <Text style={styles.loginText}>
                        LOGIN
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.signupText}>
                    Signup
                </Text>
            </TouchableOpacity>
                   
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#003f5c",
        flex: 1,
       justifyContent: 'center',
       alignItems: 'center' 
    },
    inputView: {
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 60,
        color: '#fb5b5a',
        marginBottom: 40
    },
    fogot: {
        fontSize: 15,
        color: "white"
    },
    loginBtn: {
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText: {
        fontSize: 20,
        color: "white"
    },
    signupText: {
        fontSize: 20,
        color: "white"
    }
})