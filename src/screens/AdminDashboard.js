import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  AsyncStorage,
} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          paddingTop: 32,
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>Admin Dashboard</Text>
      </View>
    );
  }
}

export default AdminDashboard;
