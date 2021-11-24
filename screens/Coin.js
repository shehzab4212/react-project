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


export default function App({ route }) {

  const { id } = route.params;
  const coingecko_url = 'https://api.coingecko.com/api/v3/coins/'+id;
  const [value, setValue] = useState('');
  const [coin, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(coingecko_url)
      .then((data) => {
        // console.log(data);
        setCoins(data.data);
        console.log(this.coin);

      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
            <View  
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                // backgroundColor: '#fff',
                paddingHorizontal: 25,
                paddingVertical: 15,
                borderBottomWidth: 0.25,
                borderBottomColor: "#A9A9A9",
                alignItems: 'center',
              }}
              key={coin.id}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      // resizeMode: 'contain',
                      borderRadius: 25,
                      // marginRight: 15,
                    }}
                    source={{ uri: coin.image?.thumb }}
                  />
              </View>
              <View>
                  <Text style={{fontWeight: "bold",fontSize: 28}}>{coin.name}</Text>
                  <Text style={{textAlign: 'center',fontSize: 18}}>({coin.symbol})</Text>
                </View>
    
                <View>
                  
                  
                  <Text style={{textAlign: 'justify',fontSize: 18,paddingHorizontal: 50,paddingVertical: 20}}>{coin.description?.en}</Text>
                </View>
                
              {/* <View>
                  <Text style={{fontWeight: "bold"}}>{coin.name}</Text>
                  <Text>{coin.symbol}</Text>
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
                <Text>{coin.market_cap_rank}</Text>
              </View> */}
            </View>
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