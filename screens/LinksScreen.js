import React,{Component} from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import SnapCamera from '../components/SnapCamera'

export default class  LinksScreen extends Component {
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
      let photo = await this.camera.takePictureAsync({base64:true}); // take a snap, and return base64 representation
     
      // construct
      let formData = new FormData();
      formData.append("image", photo.base54); 
      formData.append("type", "base64");

      this.setState({
        latestImage: photo.uri, // preview the photo that was taken
        isCameraVisible: false // close the camera UI after taking the photo
      });

      const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: 'Client-ID e2437efb088e1b1',
          Accept: 'application/json' // add your Imgur App ID here
        },
        body: formData
      });

      let response_body = await response.json(); // get the response body

      // send data to all subscribers who are listening to the client-posted-photo event
      this.user_channel.trigger("client-posted-photo", {
        id: response_body.data.id, // unique ID assigned to the image
        url: response_body.data.link // Imgur link pointing to the actual image
      });
    }
  };
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
        <View style={styles.circle}><Text style={styles.Txt}>1</Text></View>
        
        <View style={styles.link}></View>
        <View style={styles.circle1}><Text style={styles.Txt}>2</Text></View>
      </View>
      <Camera 
            style={styles.styleCamera} 
            ref={ ref => this.camera = ref } 
            type={this.state.type}
            > 
      </Camera>
      <View style={styles.styleActionCamera}>
            <SnapCamera snapPhoto={()=>{this.snapPhoto();
              this.props.navigation.navigate('Setting')}}/> 
        </View>
    </View>)
  }}

  fontCamera = () =>{
    this.setState({
      type:  this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
    });
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  styleCamera:{
    flex: 0.9,
    justifyContent:'center',
    alignItems: 'center'
  },
  styleViewCamera:{
   flex:0.1,
   backgroundColor:'white',
   flexDirection:'row',
   justifyContent: 'center',
   alignItems: 'center',
  },
  styleActionCamera:{
    flex: 0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Txt:{
    color:'white',
    textAlign:'center'
  },
  circle:{
    height:30,
    width:30,
    borderRadius:20,
    backgroundColor:'#008446',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1:{
    height:30,
    width:30,
    borderRadius:20,
    backgroundColor:'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link:{
    height:5,
    width:50,
    backgroundColor:'gray'
  }
})