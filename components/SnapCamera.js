  
import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class SnapCamera extends Component {
  render(){
  return (
    <TouchableOpacity style={styles.styleBtn} >
      <MaterialIcons name="camera" size={32}  onPress={this.props.snapPhoto}/>
    </TouchableOpacity>
  );}
}

const styles = StyleSheet.create({
  styleBtn:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center',
  }
})