import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Container, Content, Button, Text, getTheme } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LoginStyles from '../theme/styles/LoginStyle';

const LoginButton = () => {
  Actions.MapHome();
};

export default class Login extends Component {
  render() {
    return (
      <Container style={LoginStyles.container}>
        <Content style={LoginStyles.top.content}>
          <Text style={LoginStyles.top.bigtext1}>
            Test
          </Text>
          <Text style={LoginStyles.top.bigtext2}>
            Camera
          </Text>
          <Text style={LoginStyles.top.smalltext}>
            Test CAMERA
          </Text>
        </Content>
        <Button transparent style={LoginStyles.login.button} onPress={LoginButton}>
          <Text style={LoginStyles.login.text}>Login</Text>
        </Button>
      </Container>
    );
  }
}
