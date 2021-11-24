import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  View,
} from 'react-native';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';



export default function App() {
  const coingecko_url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
  const [value, setValue] = useState('');
  const [coins, setCoins] = useState([]);
  const navigation = useNavigation();

  

  useEffect(() => {
    axios
      .get(coingecko_url)
      .then((data) => {
        //console.log(data.data);
        setCoins(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        {coins.map((item) => {
          return (
            <View  
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                paddingHorizontal: 25,
                paddingVertical: 15,
                borderBottomWidth: 0.25,
                borderBottomColor: "#A9A9A9",
                alignItems: 'center',
              }}
              key={item.id} onStartShouldSetResponder={() => navigation.navigate("Coin",{id: item.id}) }>
              <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    //borderRadius: 25,
                    marginRight: 15,
                  }}
                  source={{ uri: item.image }}
                />
                <View>
                  <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                  <Text>{item.symbol}</Text>
                </View>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'orange',
                  width: 25,
                  height: 25,
                  borderRadius: 25,
                }}>
                <Text>{item.market_cap_rank}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <StatusBar style="auto" backgroundColor="blue" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});