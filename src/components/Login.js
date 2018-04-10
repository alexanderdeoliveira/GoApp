import React, { Component } from 'react';
import { View, Keyboard, BackHandler, Text, TextInput, Image, TouchableHighlight, TouchableNativeFeedback, Button, ActivityIndicator, StatusBar,StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { realizarLogin, cadastraUsuario } from '../actions/AutenticacaoActions';


class Login extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Button 
              style={styles.welcome}
              onPress = {() => {
                  this._cadastraUsuario();
                }
              }
            >
            CADASTRAR
            </Button>
          </View>
        );
      }

      _cadastraUsuario() {
        this.props.cadastraUsuario();
      }
}
    
const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
});

const mapStateToProps = state => {
    return (
        {
            mensagemErroLogin: state.AutenticacaoReducer.mensagemErroLogin
        }
    );
}

export default connect(mapStateToProps,  { realizarLogin, cadastraUsuario })(Login);