import { Text, View } from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{
        fontSize:30,
        fontWeight:100
      }}>Aura.</Text>
      <Link href="/home" style={{
        marginTop: 10,
        fontSize:24,
        color:'orange'
      }}>Go to home </Link>
    </View>
  );
}
