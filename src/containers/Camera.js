import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
  TouchableHighlight,
} from 'react-native';
import Camera from 'react-native-camera';
import CameraStyles from '../theme/styles/CameraStyle'
// get icon images
const captureIcon = require('../images/camera/ic_photo_camera_36pt.png');
// const frontCameraIcon = require('../images/camera/ic_camera_front_white.png');
// const rearCameraIcon = require('../images/camera/ic_camera_rear_white.png');
// const flashOnIcon = require('../images/camera/ic_flash_on_white.png');
// const flashOffIcon = require('../images/camera/ic_flash_off_white.png');
// const flashAutoIcon = require('../images/camera/ic_flash_auto_white.png');
const backButtonIcon = require('../images/camera/s_backButton.png');

const backButtonPress = () => {
  Actions.MapHome();
};

export default class CameraComponent extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false,
    };
  }

  takePicture() {
    this.camera.capture().then(data => console.log(data)).catch(err => console.log(err));
  }

  // 以下の関数ではthis.state.camera.typeが上手く取得できないため機能しない
  // TODO:this.state.camera.typeがきちんと値を入れているのかを調べる。
  // TODO:thisがきちんとCameraオブジェクトを指しているのかどうかを調べる。
  // switchType() {
  //   let newType;
  //   const { back, front } = Camera.constants.Type;
  //   if (this.state.camera.type === back) {
  //     newType = front;
  //   } else if (this.state.camera.type === front) {
  //     newType = back;
  //   }
  //
  //   this.setState({
  //     camera: {
  //       ...this.state.camera,
  //       type: newType,
  //     },
  //   });
  // }
  //
  // switchFlash() {
  //   let newFlashMode;
  //   const { auto, on, off } = Camera.constants.FlashMode;
  //
  //   if (this.state.camera.flashMode === auto) {
  //     newFlashMode = on;
  //   } else if (this.state.camera.flashMode === on) {
  //     newFlashMode = off;
  //   } else if (this.state.camera.flashMode === off) {
  //     newFlashMode = auto;
  //   }
  //
  //   this.setState({
  //     camera: {
  //       ...this.state.camera,
  //       flashMode: newFlashMode,
  //     },
  //   });
  // }
  // get typeIcon() {
  //   let icon;
  //   const { back, front } = Camera.constants.Type;
  //
  //   if (this.state.camera.type === back) {
  //     icon = frontCameraIcon;
  //   } else if (this.state.camera.type === front) {
  //     icon = rearCameraIcon;
  //   }
  //
  //   return icon;
  // }
  // get flashIcon() {
  //   let icon;
  //   const { auto, on, off } = Camera.constants.FlashMode;
  //
  //   if (this.state.camera.flashMode === auto) {
  //     icon = flashAutoIcon;
  //   } else if (this.state.camera.flashMode === on) {
  //     icon = flashOnIcon;
  //   } else if (this.state.camera.flashMode === off) {
  //     icon = flashOffIcon;
  //   }
  //
  //   return icon;
  // }
  render() {
    return (
      <View style={CameraStyles.container}>
        <StatusBar animated hidden />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={CameraStyles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          defaultTouchToFocus
          mirrorImage={false}
        />
        <View style={[CameraStyles.overlay, CameraStyles.topOverlay]}>
          <Text style={CameraStyles.now_mode}>
            Now_photo_mode
          </Text>
        </View>
        <View style={[CameraStyles.overlay, CameraStyles.footer]}>
          <TouchableOpacity style={CameraStyles.backButton} onPress={backButtonPress}>
            <Image source={backButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={CameraStyles.captureButton} onPress={this.takePicture}>
            <Image source={captureIcon} />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
