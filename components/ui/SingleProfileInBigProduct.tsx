import React from 'react'
import { View ,Text, StyleSheet,Image} from 'react-native'

function BigProductInFeed({data}:any) {
  return (
    <View style={{marginBottom:16}}>
      <View style={styles.image}>
        <Image style={{width:"100%",height:"100%"}} resizeMode='cover' source={{ uri: data.image }}/>
      </View>
      <Text style={styles.header}>{data.header}</Text>
      <Text style={styles.desription}>{data.description}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    image:{
        backgroundColor:"#F6F6F6",
        width:343,
        height:240,
        margin:"auto",
    },
    header:{
        marginBottom:8,
        marginTop:6,
        marginLeft:"10%",
    },
    desription:{
        width:343,
        height:34,
        fontSize:14,
        fontWeight:"400",
        lineHeight:17,
        marginBottom:8,
        marginLeft:"10%",
    },
    time:{
        fontSize:14,
        fontWeight:"400",
        lineHeight:17,
        marginBottom:8,
        color:"#BDBDBD"
    }
})


export default BigProductInFeed