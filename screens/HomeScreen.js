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

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'ID Checked',
    headerStyle: { backgroundColor: '#008446'},
    headerTitleStyle: { color: 'white'},
  };
  
  render(){
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={styles.styleCamera}>
  <Text>Bắt đầu nhận diện chứng minh nhân dân</Text>
    <TouchableOpacity style={styles.touchopacity} onPress={()=>{this.props.navigation.navigate('Links')}}>
       <Text style={{color:'white'}}>BẮT ĐẦU</Text>
    </TouchableOpacity>
    </View>
  </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchopacity:{
    borderRadius: 40,
    backgroundColor:'#4DC68D',
    alignItems:'center',
    height:'25%',
    justifyContent:'center',
    color:'white',
  }
});
