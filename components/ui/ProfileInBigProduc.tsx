import React from 'react'
import { View ,Text, StyleSheet,Image, FlatList} from 'react-native'
import SingleProfileInProduct from './SingleProfileInProduct';
import SingleProfileInBigProduct from './SingleProfileInBigProduct';
// import {Image} from "expo-image"

const products=[
    {
        id:1,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:2,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:3,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:4,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:5,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:6,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:7,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:8,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:9,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:10,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
    {
        id:11,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"https://th.bing.com/th/id/OIP.-Oq_zS3gfu_Z3IPlPIbMHQAAAA?rs=1&pid=ImgDetMain",
        time:"8m ago"
    },
];

const Profile = () => {
  return (
    <View style={{flex:1}}>
        <View style={styles.headerView}>
            <View style={styles.headerTextsView}>  
              <Text style={styles.settingText}>Settings</Text>
              <Text style={styles.profileText}>Profile</Text>
              <Text style={styles.settingText}>Logout</Text>

            </View>
            <View style={styles.userPhotoView}>
                <Image style={styles.image} resizeMode='cover' source={{ uri: "https://www.noupe.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-21-at-15.17.10-953x1024.png" }}/>
            </View>

            <View style={styles.userNameAndGoesHereText}>
                <Text style={styles.userNameText}>Victoria Robertson</Text>
                <Text style={styles.userGoesHereText}>A mantra goes here</Text>
            </View>

            <View style={styles.container}>
               <View style={styles.tabContainer}>
                 <View style={[styles.tab, styles.activeTab]}>
                   <Text style={[styles.tabText, styles.activeTabText]}>Posts</Text>
                 </View>
                 <View style={styles.tab}>
                   <Text style={styles.tabText}>Photos</Text>
                 </View>
               </View>
            </View>

            <View>
                <View> 
                   <FlatList data={products} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<SingleProfileInBigProduct data={item}/>)}></FlatList>    
                </View>
            </View>
        </View>

    </View>
  )
}

const styles=StyleSheet.create({
    userNameAndGoesHereText:{marginTop:200,marginBottom:50},
    userNameText:{textAlign:"center",fontSize:30,fontWeight:"600",lineHeight:36,color:"black",marginBottom:8},
    userGoesHereText:{textAlign:"center",color:"black",lineHeight:19,fontSize:16,fontWeight:600},
    headerTextsView:{alignItems:"center",paddingTop:30,marginBottom:32,flexDirection:"row",justifyContent:"space-around"},
    headerView:{backgroundColor:"#5DB075",height:245},
    settingText:{color:"white",fontSize:16,fontWeight:"500",lineHeight:19},
    profileText:{fontSize:30,fontWeight:"600",lineHeight:36,color:"white"},
    userPhotoView:{width:158,marginTop:"31%",marginLeft:140,borderRadius:79,position:"absolute",alignItems:"center",borderWidth:4,borderColor:"white",elevation: 5,margin:"auto",justifyContent:"center",backgroundColor:"red",height:158},
    image:{width:"100%",height:"100%",borderRadius:79},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40
      },
      tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
        borderRadius: 25,
        padding: 5,
        width: 343,
      },
      tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 25,
      },
      activeTab: {
        backgroundColor: 'white',
      },
      tabText: {
        color: '#B0B0B0',
        fontWeight: 'bold',
      },
      activeTabText: {
        color: '#5DB075',
      },
})

  
// const styles = StyleSheet.create({
//     headerView: {
//       marginBottom: 32,
//       alignItems: "center",
//       flexDirection: "row",
//       justifyContent: "space-around",
//       backgroundColor: "#5DB075",
//     },
//     settingText: { color: "white", fontSize: 16, fontWeight: "500", lineHeight: 19 },
//     profileText: { fontSize: 30, fontWeight: "600", lineHeight: 36, color: "white" },
//     userPhotoView: {
//       width: 158,
//       height: 158,
//       alignItems: 'center', // Center the image horizontally
//       justifyContent: 'center', // Center the image vertically
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       borderRadius: 79, // Yuvarlak yapmak için
//     },
//   });
export default Profile