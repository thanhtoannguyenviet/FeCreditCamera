import React from 'react'
import {TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const ChangeCamera = props =>{
    const {
        onPress,
        nameCamera
    }=props
    return (
    <TouchableOpacity
        style={{
        position:'absolute',
        left:20
        }}
        onPress={onPress}>
        <MaterialIcons name={nameCamera} size={32}/>
    </TouchableOpacity>
    )
}
export default ChangeCamera