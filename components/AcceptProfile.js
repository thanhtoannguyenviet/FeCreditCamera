import React, { Component} from 'react'
import { Text, View,ActivityIndicator,StyleSheet,TouchableOpacity} from 'react-native';
import {styleSheet} from '../const/styleSheet'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
export default class AcceptProfile extends Component{
    render(){
    state={
        result:this.props.result
    }
    //caretdown de an xuong
  
   
   
         if(this.props.result.faceVerified&&this.props.result.emblem_verified)
    return(

        <View>
             <View style={[styles.circle]}>
            <AntDesign name="check" style={styles.Txt} color='white'/>
            </View>
            <Text>Hồ sơ của bạn đã được chấp nhận</Text>
        
        <View style={{flexDirection:'row'}}>
                <View style={[styles.circle,{flexDirection:'row'}]}>
                    <AntDesign name="check" style={styles.Txt} color='white'/>
                </View>
                    <Text>Hồ sơ của bạn đã được chấp nhận</Text>
        </View>
            <ScrollView>
            <TouchableOpacity style={[styles.touchopacity1]}>
                <Text>Nhận diện khuôn mặt</Text>
                <AntDesign name="caretright" style={styles.Txt} color='#008446'/>
            </TouchableOpacity>
           
            <TouchableOpacity>
                <Text>Mẫu chuẩn đúng</Text>
                <AntDesign name="caretright" style={styles.Txt} color='#008446'/>
            </TouchableOpacity>
            </ScrollView>
        </View>
        )
    }
}