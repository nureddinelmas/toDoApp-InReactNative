import { StatusBar } from 'expo-status-bar';
import {  Text, View, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { appStyles as styles } from './styles';
import React, { useState } from 'react';

export default function App() {


  

  const [text, setText] = useState("");

   const [tasks, setTasks] = useState([])


  const handleAddTaskPress = async () => {

    setTasks([...tasks, text])

  }

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.title}>My Task</Text>
      <Text style={styles.subtitle}>Enter your tasks in the text box below</Text>
      <TextInput style={styles.input} 
      placeholder="Enter your task"
      // onChangeText={(value) => { setText(value); }}
      onChangeText={setText}
      value={text}/>
    <TouchableOpacity style={styles.buttonContainer} onPress={handleAddTaskPress}>
      <Text style={styles.buttonText}>Add Task</Text>
    </TouchableOpacity>
    <View style={styles.divider}/>
    <FlatList
    keyExtractor={item => item + Date.now() + Math.random()}
    data={tasks}
    renderItem={({item, index}) => (
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>{item}</Text>
        <TouchableOpacity onPress={() => handleDeleteTaskPress(index)} style={styles.taskDelete}><Text style={styles.taskDeleteText}>X</Text></TouchableOpacity>
      </View>
    )}/>
    </View>
  

    </SafeAreaView>

  );
}


