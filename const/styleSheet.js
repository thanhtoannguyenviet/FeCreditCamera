import React from 'react';
 import {StyleSheet} from 'react-native'
export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    touchopacityHome:{
      borderRadius: 40,
      backgroundColor:'#4DC68D',
      alignItems:'center',
      height:'10%',
      width:'80%',
      justifyContent:'center',
      color:'white',
    },
    rowCus:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
    halfView:{
      width:140 
    },
    touchopacity:{
      borderRadius: 40,
      backgroundColor:'#4DC68D',
      alignItems:'center',
      height:'35%',
      justifyContent:'center',
      color:'white',
    },
    touchopacity1:{
      borderRadius: 40,
      borderColor:'#4DC68D',
      alignItems:'center',
      height:'10%',
      justifyContent:'center',
      borderWidth:1,
      margin:10
    },
    styleViewCamera:{
        flex:0.05,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10
    },
    infView:{
      justifyContent:'space-around',
      flexDirection:'row'
    },
    textInput:{ height: 40, backgroundColor:'#C4C4C4'},
    customInf:{
      padding:30,
      justifyContent:'center',
    },
       circle:{
        height:30,
        width:30,
        borderRadius:20,
        backgroundColor:'#008446',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
      },
      circle1:{
        height:30,
        width:30,
        borderRadius:20,
        backgroundColor:'#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
      },
      circle2:{
        height:30,
        width:30,
        borderRadius:20,
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
      },
      infcircle:{
        height:20,
        width:40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      Txt:{
        color:'black',
        textAlign:'center'
      },
      Txt1:{
        color:'#C4C4C4',
        fontSize:10,
        width:55,
        textAlign:'center'
      },
      link:{
        height:5,
        width:50,
        backgroundColor:'#008446'
      },  
        link1:{
        height:5,
        width:50,
        backgroundColor:'#C4C4C4'
      },styleCamera:{
        flex: 0.9,
        marginTop:20,
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
      },Txt:{
        color:'white'
      }
  });