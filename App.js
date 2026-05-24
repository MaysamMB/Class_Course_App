import { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, Button, Alert, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/HomeScreen';
import TaskContext from "./context/TaskContext";
import Details from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const clearTask = () => {
    setTasks([]);
  };

  const value = {
    tasks,
    addTask,
    clearTask,
  };

  return ( <TaskContext.Provider value={value}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
        </NavigationContainer>
        </TaskContext.Provider>
        );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20
  }, 
  time: {
    color: 'white',
    fontWeight: '200'
  },
  card_sec1: {
    paddingLeft: 10,
  },
  type: {
    color: 'black',
    // width: '32%',
    backgroundColor: 'green',
    borderRadius: 30,
    textAlign: 'center',
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    fontSize: 18,
    fontWeight: '600',  
    marginTop: 20,
  },
  btn: {
    // flex: 1,
    width: '32%',
    justifyContent: "center",
    alignItems:"flex-end",
    textAlign: "center",
  },
  card_flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 50
  },
  home_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
  },
  home_txt: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white'
  },
  home_txt_good: {
    fontWeight: '400',
  },
  moon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: '50%',
    textAlign: 'center',
  },
  icon: {
    textAlign: 'center',
    margin: 'auto'
  },
  sec2: {
    gap: 20,
    padding: 20,
    backgroundColor: '#1A3D64',
    borderRadius: 30,
    width: '100%',
    marginBottom: 20,
  },
  sec2_txt: {
    color: 'white',
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 20, 
  },
  sec2_tit: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white'
  },
  sec2_number: {
    color: 'lightblue',
    fontWeight: 700,
    fontSize: 25,
  },
  class: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  sec3: {
    marginBottom: 20,
  },
  sec3_tit: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    padding: 20
  },
  sec3_cont: {
    height: 45,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginLeft: 20
  }, 
  sec3_hover: {
    backgroundColor: 'navy',
  },
  sec4: {
    padding: 20,
  },
  sec4_tit: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  sec4_list: {
    flex: 1
  },
  sec4_scroll: {
    height: 350,
  },
  footer_flex: {
  flexDirection: 'row',
  justifyContent: 'space-around'
 }, 

});
