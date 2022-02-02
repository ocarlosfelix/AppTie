import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    LogBox:{
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
    },

    Form:{
        width:"100%",
        height:"auto",
    },

    formLabel:{
        color:"#FFF",
        fontSize:18,
        fontWeight:"bold",
        marginTop:5,
        paddingLeft:20,
    },

    input:{
        borderRadius:50,
        backgroundColor:"#fff",
        height:40,
        margin:10,
        width:"100%",

    },

    buttonStyle:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",        
        width:"90%",
        backgroundColor:"#9dbb39",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:12,

    },

    textButtonStyle:{
        fontSize:20,
        color:"#FFF",

    },

});

export default styles