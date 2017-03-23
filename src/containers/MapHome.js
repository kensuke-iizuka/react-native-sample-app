import React, { Component } from 'react';
import { Container, Button, Footer, Text, getTheme } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import MapComponent from '../components/Map';
// import SearchHeader from '../components/SearchBar';
import MapHomeStyles from '../theme/styles/MapHomeStyle';

const onLogoutButtonPress = () => {
  Actions.Login({ type: ActionConst.RESET });
};
const onCameraButtonPress = () => {
  Actions.Camera();
};

export default class MapHome extends Component {
  render() {
    return (
      <Container>
        <MapComponent />
        <Footer style={MapHomeStyles.footer.content}>
          <Button rounded style={MapHomeStyles.footer.button} onPress={onCameraButtonPress}>
            <Text style={MapHomeStyles.footer.buttontext}>カメラ</Text>
          </Button>
          <Button rounded style={MapHomeStyles.footer.button} onPress={onLogoutButtonPress}>
            <Text style={MapHomeStyles.footer.buttontext}>ログアウト</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
