import React,{Component} from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import SnapCamera from '../components/SnapCamera'
import ChangeCamera from '../components/ChangeCamera'
import { AntDesign } from '@expo/vector-icons';
export default class  SettingScreen extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: { backgroundColor: '#008446'},
    headerTitleStyle: { color: 'white'},
    headerTintColor: 'white',
 
  };
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  snapPhoto = async( ) =>{       
    console.log('Button Pressed');
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ quality: 1, base64: true, fixOrientation: true, 
        exif: true}).then(photo=>{
          photo.exif.Orientation=1;
          console.log(photo)
        }); // take a snap, and return base64 representation
     
      let formData = new FormData();
      
      formData.append("image", photo.base64); 
      formData.append("type", "base64");
      console.log(formData)
      this.setState({
        latestImage: photo.uri, // preview the photo that was taken
        isCameraVisible: false // close the camera UI after taking the photo
      });

      const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
      
          Authorization: 'Client-ID e2437efb088e1b1',
          Accept: 'application/json'
          // add your Imgur App ID here
        },
        data: formData
        ,success: result =>{
          console.log(result.data.id); 
        }
      });

      let response_body = await response.json(); // get the response body
      console.log(response_body)
      // send data to all subscribers who are listening to the client-posted-photo event
      this.user_channel.trigger("client-posted-photo", {
        id: response_body.data.id, // unique ID assigned to the image
        url: response_body.data.link // Imgur link pointing to the actual image
      });
    }
  };
  
  fontCamera = () =>{
    this.setState({
      type:  this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
    });
  }
  render(){
     const { hasCameraPermission,type } = this.state;
    if(
    hasCameraPermission === null ){
    return <View />
    }
    else if(
    hasCameraPermission === false){
    return <Text>No access to camera</Text>
    }
    else{
    return (<View style={styles.container}>
      <View style={styles.styleViewCamera}>
      <View style={styles.circle}><AntDesign name="check" style={styles.Txt} color='white'/></View>
        <View style={styles.link}></View>
        <View style={styles.circle}><AntDesign name="check" style={styles.Txt} color='white'/></View>
        <View style={styles.link}></View>
        <View style={styles.circle1}><Text style={styles.Txt}>3</Text></View>
      </View>
      <Camera 
            style={styles.styleCamera} 
            ref={(ref) => {this.camera = ref} } 
            type={this.state.type}
            > 
      </Camera>
      <View style={styles.styleActionCamera}>
            <ChangeCamera
                onPress={() =>this.fontCamera()}
                nameCamera={type===Camera.Constants.Type.front?"camera-rear" : "camera-front"}
            />
            <SnapCamera snapPhoto={()=>{this.snapPhoto();
              this.props.navigation.navigate('Setting')}}/> 
        </View>
    </View>)
  }}

}