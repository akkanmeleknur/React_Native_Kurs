import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CourseInput from './components/CourseInput';


export default function App() {

  const [modalIsVİsible, setmodalIsVİsible] = useState(false);

  const startModel = () => {
    setmodalIsVİsible(true)
  }
  
  const endModal = () => {
    setmodalIsVİsible(false)
  }

  const [courses, setCourses] = useState([]);

  const addCourse = (courseTitle) => {
    
    setCourses(
      (currenCourses) => [
      ...currenCourses,
      {text:courseTitle,id:Math.random().toString()}
      ]);

      endModal();
  }

  return (
  <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Button title='Kurs Ekle' color="purple" onPress={startModel}/>

      <CourseInput 
      visible={modalIsVİsible} 
      onAddCourse={addCourse} 
      onCancel={endModal}/>

      <View>
        <FlatList
          data={courses}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <View style={styles.courseItem}>
              <Text style={styles.courseText}>{item.text}</Text>
            </View>}
        />
      </View>
    </View>

  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingBottom:50,
    paddingHorizontal:20
  },

  courseItem:{
    backgroundColor:"lightyellow",
    marginTop:10,
    padding:20,
    borderRadius:10,
    marginHorizontal:50

  },

  courseText:{
    fontSize:16,
    color:"darkblue",
    fontStyle:"italic"
  }
});

