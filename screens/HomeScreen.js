import * as WebBrowser from 'expo-web-browser';
import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styleSheet} from '../const/styleSheet';
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Id Checked',
    headerStyle: { backgroundColor: '#008446'},
    headerTitleStyle: { color: 'white'},
  };
  
  render(){
  return (
  <View style={styles.container}>
    <View style={styles.styleCamera}>
  <Text>Bắt đầu nhận diện chứng minh nhân dân</Text>
    <TouchableOpacity style={styles.touchopacityHome} onPress={()=>{this.props.navigation.navigate('Info')}}>
       <Text style={{color:'white'}}>BẮT ĐẦU</Text>
    </TouchableOpacity>
    </View>
  </View>
  );
}
}


