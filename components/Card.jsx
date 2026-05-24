import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
const Card = (props) => {
  return (
      <View style={[styles.imgBox]}>
        <Image style={[styles.boxImg]} source={props.imgSrc}/>
        <Text style={[styles.txtImg]}>{props.txt}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  boxImg: {
    width: '90%',
    height:180, 
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
  },
  txtImg: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 500,
    marginTop: 20,
  },
  imgBox: {
    width: 220,
    height: 280,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
});

export default Card;