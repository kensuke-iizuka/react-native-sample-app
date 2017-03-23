import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Content } from 'native-base';

const { height, width } = Dimensions.get('window');
const mapstyles = StyleSheet.create({
  map: {
    width,
    height: height * 0.66,
  },
});

export default class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 35.68112260338189,
        longitude: 139.7667827121544,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          latlng: { latitude: 35.68112260338189, longitude: 139.7667827121544 },
          title: 'Tokyo Station',
          description: 'One of the big stations.',
        },
      ],
    };
  }
  render() {
    return (
      <MapView style={mapstyles.map} region={this.state.region}>
        {this.state.markers.map((marker, i) => (
          <MapView.Marker
            key={`marker-${String(i + 1)}`}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}
