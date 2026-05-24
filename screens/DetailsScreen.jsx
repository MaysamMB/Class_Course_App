import { View, StyleSheet, Text, ScrollView, Pressable} from 'react-native';


export default function Details({ navigation, route }) {
  const { title, time, type } = route.params;
  return <ScrollView showsVerticalScrollIndicator={false} style={[styles.container]}>
        <Pressable style={[styles.btn]} onPress={() => navigation.navigate('Home')}>
            <Text style={[{...styles.txt, fontSize: 20}]}>Back</Text>
        </Pressable>
        <Text style={{...styles.txt, fontSize: 30, fontWeight: 700, textAlign: "center"}}>Course Details</Text>

        <View style={[styles.card]}>
        <Text style={[styles.txt]}>{title}</Text>
            <View style={[styles.row]}>
                <Text style={[styles.txt]}>{type}</Text>
                <Text style={[styles.txt]}>{time}</Text>
            </View>
        </View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
},
card: {
    width: '100%',
    height: 100,
    backgroundColor: '#1A3D64',
    justifyContent: "center",
    padding: 25,
    borderRadius: 20,
    marginTop: 20,
},
txt: {
    color: "white",
    fontSize: 23,
    fontWeight: 600,
},
row: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 4,
},
btn: {
    position: "absolute",
    top: 20,
}


});
