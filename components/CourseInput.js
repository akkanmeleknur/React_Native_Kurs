import { StyleSheet, Text, View ,Modal, TextInput,Image, Button} from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({visible,onAddCourse,onCancel}) {

    const [enteredCourseText, setenteredCourseText] = useState("");

    const addCourseHandler=()=>{
        onAddCourse(enteredCourseText);
        setenteredCourseText("");
    }

  return (
    <Modal animationType="slide"  visible={visible}>
          
          <View style={styles.inputContainer}>

            <Image style={styles.image} source={require('../assets/kurs_icon.png')} />
            
            <TextInput 
            style={styles.textInput} 
            placeholder='Yeni Kurs Ekle'
            value={enteredCourseText} 
            onChangeText={(text)=>setenteredCourseText(text)}/>
            
            <View style={styles.buttonContainer}>

                <View style={styles.button}>  
                    <Button title='İptal Et' color="darkblue" onPress={onCancel}/>
                </View>
           
                <View style={styles.button}>  
                    <Button title='Kaydet' color="green" onPress={addCourseHandler} />
                </View>

            </View>
            
          </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  
    inputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },

    image:{
        borderRadius:20,
        height:150,
        width:150,
        margin:20
    },

    textInput:{
        borderWidth:2,
        backgroundColor:"lightyellow",
        width:'80%',
        padding:10,
        borderRadius:10,
        borderColor:"darkblue"
    },

    buttonContainer:{
        flexDirection:"row",
        margin:20
    },

    button:{
        width:100,
        marginHorizontal:20
    }


});

