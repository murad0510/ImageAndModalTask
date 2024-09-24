import React from 'react'
import { StyleSheet, View,Text ,Image} from 'react-native'

function SingleDataInFeed({data}:any) {
  return (
    <View style={styles.singleHeader}>
    <View style={styles.headerInPhoto}>
      <Image style={styles.image} source={{ uri: data.image }}/>
    </View>
    <View>
        <View style={styles.headerInAgoAndHeader}>
           <Text style={styles.headerInHead}>{data.header}</Text>
           <Text style={styles.headerInTime}>{data.time}</Text>
        </View>
        <Text style={styles.headerInDescription}>{data.description}</Text>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
    image:{width:"100%",height:"100%",borderRadius:8},
    headerInPhoto:{
      width:50,
      height:50,
      backgroundColor:"#F6F6F6",
      borderRadius:8,
      marginRight:16
    },
    singleHeader:{
      width:350,
      margin:"auto",
      display:"flex",
      flexDirection:"row",
      marginBottom:16
    },
    headerInAgoAndHeader:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:284,
      marginBottom:8
    },
    headerInHead:{
      fontSize:16,
      fontWeight:"600",
      lineHeight:19,
      width:57,
      height:19
    },
    headerInTime:{
      fontSize:14,
      fontWeight:400,
      lineHeight:17,
      color:"#BDBDBD",
      width:50,
      height:17,
    },
    headerInDescription:{
      fontSize:14,
      fontWeight:"400",
      lineHeight:17,
      width:269,
      height:34,
      marginBottom:16
    }
  });


export default SingleDataInFeed