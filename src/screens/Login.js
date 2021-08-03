import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
      loaderMessage: 'Loading ...',
    };
  }
  async checkLogin() {
    if (this.state.email.length == 0) {
      ToastAndroid.show('Please Enter Email Id', ToastAndroid.SHORT);
      return;
    }
    if (this.state.pwd.length == 0) {
      ToastAndroid.show('Please Enter Password', ToastAndroid.SHORT);
      return;
    }
    ToastAndroid.show('Please Wait.....', ToastAndroid.SHORT);
    var axios = require('axios');
    var data = {
      email: this.state.email,
      pwd: this.state.pwd,
    };

    var config = {
      method: 'post',
      url: 'http://antiaddiction.herokuapp.com/login.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    try {
      let response = await axios(config);
      if (response.data?.code == 200) {
        AsyncStorage.setItem('userDate', JSON.stringify(response.data?.data));
        if (response.data?.data?.role == 'admin') {
          this.props.navigation.replace('AdminDashboard');
        } else {
          this.props.navigation.replace('UserDashboard');
        }
      } else {
        ToastAndroid.show('Email or password is incorrect', ToastAndroid.SHORT);
      }
      console.log(response);
    } catch (e) {
      console.error(e);
      ToastAndroid.show('Email or password is incorrect', ToastAndroid.SHORT);
      return '';
    } finally {
    }
  }
  render() {
    return (
      <View
        style={{
          paddingTop: 32,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16}}>Email Id</Text>
        <TextInput
          placeholder={'Enter Email'}
          keyboardType={'default'}
          style={{
            width: windowWidth - 48,
            height: 48,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: '#fff',
            fontSize: 16,
            color: '#000',
            marginTop: 24,
            paddingHorizontal: 12,
            paddingVertical: 14,
            alignItems: 'flex-start',
            textAlignVertical: 'top',
          }}
          onChangeText={text =>
            this.setState({
              email: text,
            })
          }
          value={this.state.email}
        />
        <Text style={{fontSize: 16, marginTop: 24}}>Password</Text>
        <TextInput
          placeholder={'Enter Email'}
          keyboardType={'default'}
          style={{
            width: windowWidth - 48,
            height: 48,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: '#fff',
            fontSize: 16,
            color: '#000',
            marginTop: 24,
            paddingHorizontal: 12,
            paddingVertical: 14,
            alignItems: 'flex-start',
            textAlignVertical: 'top',
          }}
          onChangeText={text =>
            this.setState({
              pwd: text,
            })
          }
          value={this.state.pwd}
        />
        <TouchableOpacity
          style={{
            width: windowWidth - 48,
            height: 50,
            borderRadius: 15,
            borderWidth: 0,
            borderColor: '#008FFF',
            backgroundColor: '#8a8a8a',
            elevation: 2,
            marginTop: 24,
            paddingHorizontal: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => this.checkLogin()}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#000',
              lineHeight: 20,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 16, marginTop: 24}}>Or</Text>
        <TouchableOpacity
          style={{
            width: windowWidth - 48,
            height: 50,
            borderRadius: 15,
            borderWidth: 0,
            borderColor: '#008FFF',
            backgroundColor: '#8a8a8a',
            elevation: 2,
            marginTop: 24,
            paddingHorizontal: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => this.props.navigation.replace('Signup')}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#000',
              lineHeight: 20,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
