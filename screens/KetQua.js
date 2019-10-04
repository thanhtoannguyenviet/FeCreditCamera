import React, { Component} from 'react'
import { Text, View,ActivityIndicator,StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native';
import {styleSheet} from '../const/styleSheet';
import { AntDesign } from '@expo/vector-icons';
import AcceptProfile from '../components/AcceptProfile';
const Url_API_Get="http://devcfecredit.herokuapp.com/idchecker?idCardPath=https://i.imgur.com/2VVaNKC.jpg&selfiePath=https://imgur.com/Ky6PSlI.jpg"
export default class KetQua extends Component {
    static navigationOptions = {
        title: 'Kết quả',
        headerStyle: { backgroundColor: '#008446'},
        headerTitleStyle: { color: 'white'},
        headerTintColor: 'white',
        
      };
    state={
        isLoading:false,
        Match:false,
        jsonResult:"",
        caret:'caretright'
    }
    componentDidMount = async()=>{
        this.setState({isLoading:true})
        this.getResult()
    }
    getResult = async()=>{
        const response= await fetch(Url_API_Get);
        const jsonResonpse= await response.json();
        console.log(jsonResonpse);
        if(jsonResonpse){
            this.setState({
                isLoading:false,
                Match:true,
                jsonResult:jsonResonpse
            })
        }
    }
    
    render() {
        const { isLoading,resultEmblem_verified,resultFaceVerified } = this.state
        
        if (isLoading) {
          return (
            <View style={[styles.container,
                {justifyContent:'center', alignItems:'center'}]}>
              <ActivityIndicator size="large" color="green" animating={isLoading} />
            </View>)
        }
        return (
        <View style={styles.styleCamera}>
            <View style={{flexDirection:'row',margin:10}}>
                <View style={styles.circle}>
                    <AntDesign name="check" style={styles.Txt} color='white'/>
                </View>
                <View>
                    <Text>Hồ sơ của bạn đã được chấp nhận</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.touchopacity1} >
                    <Text>Nhận diện khuôn mặt</Text>
                </TouchableOpacity>
                <View style={{borderRadius:10,borderColor:'green',borderWidth:2,height:120,width:300,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Image source={{uri:this.state.jsonResult.rsDrawIdFaceUrl}} style={{height:'100%',width:'45%',margin:5,resizeMode :'contain'}}></Image>
                    <Image source={{uri:this.state.jsonResult.rsDrawSelfieUrl}} style={{height:'100%',width:'45%',margin:5,resizeMode :'contain'}}></Image>
                </View>
                <TouchableOpacity style={styles.touchopacity1} >
                    <Text>Mẫu chuẩn đúng (Quốc Uy) </Text>
                </TouchableOpacity>
                <View style={{borderRadius:10,borderColor:'green',borderWidth:2,height:120,width:300,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Image source={{uri:this.state.jsonResult.rsDrawIdEmblemUrl}} style={{height:'40%',width:'80%'}}></Image>
                </View>
       </View>
  <View>
<TouchableOpacity style={styles.touchopacityHome}>
   <Text style={{color:'white'}}>XÁC NHẬN</Text>
</TouchableOpacity></View>
</View>
        )
    }
}
