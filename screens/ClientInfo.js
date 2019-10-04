import React,{Component} from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Button,TextInput,DatePickerIOS } from 'react-native';
import { Camera } from 'expo-camera';
import {styleSheet} from '../const/styleSheet';
export default class  SettingScreen extends Component {
    static navigationOptions = {
      title: 'Id Checked',
      headerStyle: { backgroundColor: '#008446'},
      headerTitleStyle: { color: 'white'},
      headerTintColor: 'white',
   
    };
    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
   
    render(){
      return (<View style={styles.container}>
          <View style={styles.styleViewCamera}>
        <View style={styles.circle}><Text style={styles.Txt}>1</Text></View>
        <View style={styles.link1}></View>
        <View style={styles.circle1}><Text style={styles.Txt}>2</Text></View>
        <View style={styles.link1}></View>
        <View style={styles.circle1}><Text style={styles.Txt}>3</Text></View>
      </View>
      <View style={styles.infView}>
        <View style={styles.infcircle}></View>
        <View style={styles.infcircle}>
          <Text style={styles.Txt1}>Nhập thông tin</Text>
        </View>
        <View style={styles.infcircle}><Text style={styles.Txt1}>Chụp CMND</Text></View>
        <View style={styles.infcircle}><Text style={styles.Txt1}>Chụp ảnh bản thân</Text></View>
        <View style={styles.infcircle}></View>
      </View>
      <View style={{flex:0.7}} >
        <View style={styles.customInf}>
          <Text>Tên</Text> 
          <TextInput  style={styles.textInput}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}/> 
        </View>  
        <View style={styles.rowCus}>
          <View style={styles.halfView} >
            <Text>Số CMND</Text>
            <TextInput style={styles.textInput}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}/>
          </View>
          <View style={styles.halfView} >
            <Text>Ngày sinh</Text>
            <TextInput style={styles.textInput}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}/>
          </View>
          
        </View>
        <View style={styles.customInf}>
          <Text>Quê quán</Text> 
          <TextInput  style={styles.textInput}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}/> 
        </View> 
        <View style={[styles.customInf,{paddingTop:0}]}>
          <Text>Địa chỉ</Text> 
          <TextInput  style={styles.textInput}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}/> 
        
        </View> 
        <View style={[styles.customInf,{paddingTop:0}]}>
          <TouchableOpacity style={styles.touchopacity} onPress={()=>{this.props.navigation.navigate('CMND')}}>
            <Text style={{color:'white'}}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View> 
      </View>
      </View>)
    }
 }
 
  