import { useState } from 'react';
import {useContext} from "react";
import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import TaskContext from "../context/TaskContext"; 

const Card = (props) => {
  return <View style={styles.card}>
    <View style={[styles.card_flex]}>
    <View style={[styles.card_sec1]}> 
    <Text style={[{...styles.title, color: props.flag ? 'white' : 'black'}]}>{props.title}</Text>
    <Text style={[{...styles.time, color: props.flag ? 'white' : 'black'}]}>{props.time}</Text>
    </View>
    <Pressable style={[styles.btn]}
        onPress={() =>  
            props.navigation.navigate('Details', {
            id: props.id,
            title: props.title,
            time: props.time,
            type: props.type,
        })}
    >
    <Text style={[{...styles.type, backgroundColor: props.flag ? 'green' : 'lightgreen', color: props.flag ? 'black' : 'white'}]}>{props.type}</Text>
    </Pressable>
    </View>
  </View>
};


export default function Home({ navigation }) {
  const [dark, setDark] = useState(true);
  const { tasks, addTask, clearTask } = useContext(TaskContext);
  const arr = [
    {
      id: 1,
      title: 'DATA Structue',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
    {
      id: 2,
      title: 'OPP',
      time: '10:00 Am - 11:00 AM',
      type: 'lab'
    },
    {
      id: 3,
      title: 'DATA Base',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
    {
      id: 4,
      title: 'OS',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
    {
      id: 5,
      title: 'Number theory',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
    {
      id: 6,
      title: 'Number theory',
      time: '10:00 Am - 11:00 AM',
      type: 'lab'
    },
    {
      id: 7,
      title: 'Number theory',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
    {
      id: 8,
      title: 'Network',
      time: '10:00 Am - 11:00 AM',
      type: 'lab'
    },
    {
      id: 9,
      title: 'DATA Base1',
      time: '10:00 Am - 11:00 AM',
      type: 'lab'
    },
    {
      id: 10,
      title: 'DATA Structue',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
    {
      id: 11,
      title: 'DATA Structue',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
    {
      id: 12,
      title: 'DATA Base2',
      time: '10:00 Am - 11:00 AM',
      type: 'lecture'
    },
  ]
  return <View style={{...styles.container, backgroundColor: dark ? 'black' : 'white'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.home_bar]}>
        <View>
          <Text style={[{...styles.home_txt, color: dark ? 'white' : 'black'}, styles.home_txt_good]}>Good Morning,</Text>
          <Text style={[{...styles.home_txt, color: dark? 'white' : 'black'}]}>maysam</Text>
        </View>
        <View>
          <Pressable style={[{...styles.moon, backgroundColor: dark ? 'white' : 'black'}]} onPress={() => setDark(!dark)}>
          <Entypo style={[styles.icon]} name="moon" size={25} color= {dark ? "black" : "white"} />
          </Pressable>
        </View>
      </View>
      <View style={[{...styles.sec2, backgroundColor: dark ? '#1A3D64' : '#99c4e9ff'}]}>
        <Text style={[{...styles.sec2_tit, color: dark? 'white' : 'black'}]}>Today Overview</Text>
        <View style={[styles.class]}>

        <View>
          <Text style={[styles.sec2_txt, {...styles.sec2_number, color: dark? 'white' : 'black'}]}>2</Text>
          <Text style={[{...styles.sec2_txt, color: dark? 'white' : 'black'}]}>classes</Text>
        </View>
        <View>
          <Text style={[styles.sec2_txt, {...styles.sec2_number, color: dark? 'white' : 'black'}]}>4</Text>
          <Text style={[{...styles.sec2_txt, color: dark? 'white' : 'black'}]}>Assignment</Text>
        </View>
        <View>
          <Text style={[styles.sec2_txt, {...styles.sec2_number, color: dark? 'white' : 'black'}]}>3</Text>
          <Text style={[{...styles.sec2_txt, color: dark? 'white' : 'black'}]}>Homework</Text>
        </View>
        </View>
      </View>

      <View style={[styles.sec3]}> 
        <Text style={[{...styles.sec3_tit, color: dark? 'white' : 'black'}]}>Categories</Text>
        <ScrollView style={[styles.scroll]} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
          <Text style={[{...styles.sec3_cont, color: dark? 'white' : 'black'}, {...styles.sec3_hover, backgroundColor: dark? 'navy' : 'rgba(40, 79, 118, 1)', color: 'white'}]}>Today</Text>
          <Text style={[{...styles.sec3_cont, color: dark? 'white' : 'black'}]}>Exams</Text>
          <Text style={[{...styles.sec3_cont, color: dark? 'white' : 'black'}]}>Project</Text>
          <Text style={[{...styles.sec3_cont, color: dark? 'white' : 'black'}]}>Personal</Text>
          <Text style={[{...styles.sec3_cont, color: dark? 'white' : 'black'}]}>Things</Text>
          <Text style={[{...styles.sec3_cont, color: dark? 'white' : 'black'}]}>Courses</Text>
          <Text style={[{...styles.sec3_cont, color: dark? 'white' : 'black'}]}>Other</Text>
        </ScrollView>
      </View> 
      <View style={[styles.sec4]}>
        <Text style={[{...styles.sec4_tit, color: dark? 'white' : 'black'}]}>Courses Today</Text>
        <View style={[styles.sec4_list]}>
          <ScrollView style={[styles.sec4_scroll]} showsHorizontalScrollIndicator={false}>
             {arr.map((obj) => (<Card key={obj.id} navigation={navigation} flag={dark}  title={obj.title} time={obj.time} type={obj.type}/>))}
          </ScrollView>
        </View>
      </View>
        </ScrollView>
      <View style={[styles.footer]}>
        <View style={[styles.footer_flex]}>
        <View> 
          <FontAwesome name="home" size={24} color= {dark ? "white" : "black"} />
          <Text style={[{...styles.footer_txt, color: dark ? 'white' : 'black'}]}>Home</Text>
        </View>
        <View>
          <AntDesign name="open-a-i" size={24} color= {dark ? "white" : "black"} />
          <Text style={[{...styles.footer_txt, color: dark ? 'white' : 'black'}]}>AI</Text>
        </View>
        <View>
          <FontAwesome name="paper-plane-o" size={24} color= {dark ? "white" : "black"} />
          <Text style={[{...styles.footer_txt, color: dark ? 'white' : 'black'}]}>Direct</Text>
        </View>
        <View>
          <Ionicons name="settings-outline" size={24} color= {dark ? "white" : "black"} />
          <Text style={[{...styles.footer_txt, color: dark ? 'white' : 'black'}]}>Setting</Text>
        </View>
        </View>
      </View>
  </View>;
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
